module MailerTestHelpers
  def last_emails(expected_number)
    expect(ActionMailer::Base.deliveries.size).to eq expected_number

    ActionMailer::Base.deliveries.pop(expected_number)
  end

  def last_email
    last_emails(1).first
  end
end

RSpec.configuration.include MailerTestHelpers
RSpec.configuration.include ActiveJob::TestHelper
