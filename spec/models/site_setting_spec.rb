# == Schema Information
#
# Table name: site_settings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  site_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  admin      :boolean          default(FALSE), not null
#
# Indexes
#
#  index_site_settings_on_site_id              (site_id)
#  index_site_settings_on_user_id              (user_id)
#  index_site_settings_on_user_id_and_site_id  (user_id,site_id) UNIQUE
#
# Foreign Keys
#
#  fk_site_settings_site_id  (site_id => sites.id)
#  fk_site_settings_user_id  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe SiteSetting do
  describe 'relations' do
    it { is_expected.to belong_to(:site) }
    it { is_expected.to belong_to(:user) }
  end

  describe 'validations' do
    subject { FactoryBot.build :site_setting }

    it { is_expected.to validate_presence_of(:site) }
    it { is_expected.to validate_uniqueness_of(:site).scoped_to(:user_id) }

    it { is_expected.to validate_presence_of(:user) }
  end
end
