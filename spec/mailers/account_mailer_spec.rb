require 'rails_helper'

RSpec.describe AccountMailer, type: :feature do
  let(:site) { FactoryGirl.create(:site) }
  let(:user) { site.users.first }
  let(:token) { rand(10_000) }

  describe '.reset_password_instructions' do
    subject { described_class.reset_password_instructions(user, token) }

    include_examples 'site email'

    it 'is sent to users email' do
      expect(subject.to).to eq [user.email]
    end

    it 'has subject' do
      expect(subject.subject).to eq 'Reset password instructions'
    end

    it 'has text in body' do
      expect(subject.body).to have_content(
        'Someone has requested a link to change your password.'
      )
    end

    it 'has reset password link in body' do
      host = "http://#{site.host}"
      path = "/users/password/edit?reset_password_token=#{token}"
      link = "#{host}#{path}"

      expect(subject.body).to have_link 'Change password', href: link
    end
  end

  describe '.unlock_instructions' do
    subject { described_class.unlock_instructions(user, token) }

    include_examples 'site email'

    it 'is sent to users email' do
      expect(subject.to).to eq [user.email]
    end

    it 'has subject' do
      expect(subject.subject).to eq 'Unlock instructions'
    end

    it 'has text in body' do
      expect(subject.body).to have_content 'Your account has been locked'
    end

    it 'has reset password link in body' do
      link = "http://#{site.host}/users/unlock?unlock_token=#{token}"

      expect(subject.body).to have_link 'Unlock account', href: link
    end
  end
end
