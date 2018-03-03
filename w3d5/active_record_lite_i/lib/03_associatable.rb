require_relative '02_searchable'
require 'active_support/inflector'
require 'byebug'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    # ...
    self.class_name.constantize
  end

  def table_name
    # ...
    return "humans" if self.class_name.downcase == "human"
    self.class_name.tableize
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    # ...
    
    self.primary_key= 'id'.to_sym
    self.foreign_key= "#{name}_id".to_sym
    self.class_name = name.camelcase

    options.each do |attr, value|
      attr_eq = "#{attr}=".to_sym
      self.send(attr_eq, value)
    end
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    # ...
    self.primary_key= 'id'.to_sym
    self.foreign_key= "#{self_class_name.underscore}_id".to_sym
    self.class_name = name.singularize.camelcase
    
    options.each do |attr, value|
      attr_eq = "#{attr}=".to_sym
      self.send(attr_eq, value)
    end
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    # ...
  end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  # Mixin Associatable here...
end
