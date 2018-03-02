require 'byebug'
class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
      instance_name = "@#{name}".to_sym
      define_method(name) do
        instance_variable_get(instance_name)
      end
      name_eq = "#{name}=".to_sym
      define_method(name_eq) do |value|
        instance_variable_set(instance_name, value)
      end
    end
  end
end
