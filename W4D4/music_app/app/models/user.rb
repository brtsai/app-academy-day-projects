class User < ApplicationRecord
  after_initialize :ensure_session_token!
  validates :email, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  def self.find_by_credentials(email, pass)
    user = self.find_by(email: email)

    if user.nil?
      return nil
    elsif user.is_password?(pass)
      return user
    end
    nil
  end

  def self.generate_session_token!
    SecureRandom::urlsafe_base64
  end
  
  def is_password?(pass)
    bc_pass = BCrypt::Password.new(self.password_digest)
    bc_pass.is_password?(pass)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token!
    self.save!
  end

  def ensure_session_token!
    self.session_token ||= User.generate_session_token!
  end

  def password= (new_password)
    @password = new_password
    digest = BCrypt::Password.create(new_password)
    self.password_digest = digest.to_s
  end
  
end
