class User < ApplicationRecord
  before_save { self.email = email.downcase } #enforces email uniqueness
  validates(:name, presence: true, length: { maximum: 50 } )
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence:   true, length: { maximum: 255 },
                    format:     { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  has_secure_password
  PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
  validates :password, presence: true, length: { minimum: 6 },
                        format:  { with: PASSWORD_REGEX }
end
