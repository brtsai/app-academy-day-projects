class User < ApplicationRecord

  after_initialize :ensure_token

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  has_many :comments
  has_many :moderator_memberships

  def self.find_by_creds(username, password)
    user = User.find_by_username(username)
    if user.nil?
      return nil
    else
      return user if user.password?(password)
    end
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
