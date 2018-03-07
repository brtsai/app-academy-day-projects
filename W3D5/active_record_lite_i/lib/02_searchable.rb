require_relative 'db_connection'
require_relative '01_sql_object'
require 'byebug'

module Searchable
  def where(params)
    # ...
    where_line = params.keys.map { |field| "#{field} = ?"}.join(' AND ')
    results = DBConnection.execute(<<-SQL, *params.values)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{where_line}
    SQL
    results.map { |result| self.new(result) }
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
