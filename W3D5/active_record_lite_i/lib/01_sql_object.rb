require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    if @columns.nil?
      data = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name}
        LIMIT
          1
      SQL
      col_names = data.first
      @columns = col_names.map { |str| str.to_sym }
    end

    @columns
  end

  def self.finalize!
    self.columns.each do |col_name|
      define_method(col_name) do
        attributes[col_name]
      end

      col_name_eq = "#{col_name}=".to_sym
      define_method(col_name_eq) do |val|
        attributes[col_name] = val
      end

    end
  end

  def self.table_name=(table_name)
    # ...
    @table_name = table_name
  end

  def self.table_name
    # ...
    if @table_name.nil?
      @table_name = self.name.tableize
    end
    @table_name
  end

  def self.all
    # ...
    table_star = "#{self.table_name}.*"
    data = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    
    self.parse_all(data)
  end

  def self.parse_all(results)
    # ...
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    # ...
    result = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{self.table_name}.id = ?
    SQL
    return nil if result.empty?
    self.new(result.first)
  end

  def initialize(params = {})
    # ...
    params.each do |attr_name, value|
      attr_name_sym = attr_name.to_sym
      unless self.class.columns.include?(attr_name_sym)
        raise "unknown attribute '#{attr_name}'"
      end
      
      attr_name_eq = "#{attr_name_sym}=".to_sym
      self.send(attr_name_eq, value)
  
    end
  end

  def attributes
    # ...
    if @attributes.nil?
      @attributes = {}
    end
    @attributes
  end

  def attribute_values
    # ...
    attributes.map { |k,v| v }
  end

  def insert
    # ...
    columns_not_id = self.class.columns[1..-1]
    column_names = "(#{columns_not_id.join(',')})"
    question_marks = "(#{(['?'] * (attribute_values.count)).join(',')})"
    result = DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO
        #{self.class.table_name} #{column_names}
      VALUES
        #{question_marks}
    SQL
    self.send('id='.to_sym, DBConnection.last_insert_row_id)
  end

  def update
    # ...
    set_line = self.class.columns[1..-1].map do |attr_name|
      "#{attr_name} = ?"
    end.join(',')
    attr_values = attribute_values[1..-1]
    result = DBConnection.execute(<<-SQL, *attr_values, self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{set_line}
      WHERE
        id = ?
    SQL

  end

  def save
    # ...
    if self.id.nil?
      insert
    else
      update
    end
  end
end
