require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    if @columns.nil?
      data = DBConnection.execute2(<<-SQL, )
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
  
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
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
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
