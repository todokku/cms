require 'rails_helper'

RSpec.describe 'footer', type: :feature do
  it 'has page last updated' do
    visit_page '/test_page'

    within 'footer' do
      date = test_page.updated_at.to_date.iso8601
      expect(page).to have_content "Page last updated #{date}"
    end
  end

  it 'last updated should be in words', js: true do
    visit_page '/test_page'

    Timecop.freeze(Time.zone.now - 1.month - 3.days) do
      test_page.updated_at = Time.zone.now
      test_page.save!
    end

    visit_page '/test_page'

    within 'footer' do
      expect(page).to have_content 'Page last updated about a month ago'
    end
  end

  it 'has copyright' do
    visit_page '/test_page'

    within 'footer' do
      expect(page).to have_content "#{site.copyright} © #{Time.zone.now.year}"
    end
  end

  it 'has Facebook link' do
    visit_page '/test_page'

    link = "a[href=\"https://www.facebook.com/#{site.facebook}\"]"
    expect(page).to have_selector "footer #cms-facebook #{link}"

    expect(page).to have_selector 'footer #cms-facebook a .fa-facebook-official'
  end

  context 'no facebook' do
    it 'does not show Facebook link' do
      site.facebook = nil
      site.save!
      visit_page '/test_page'
      expect(page).to_not have_selector 'footer #cms-facebook'
    end
  end

  it 'has Twitter link' do
    visit_page '/test_page'

    link = "a[href=\"https://twitter.com/#{site.twitter}\"]"
    expect(page).to have_selector "footer #cms-twitter #{link}"

    expect(page).to have_selector 'footer #cms-twitter a .fa-twitter'
  end

  context 'no twitter' do
    it 'does not show Twitter link' do
      site.twitter = nil
      site.save!
      visit_page '/test_page'
      expect(page).to_not have_selector 'footer #cms-twitter'
    end
  end

  it 'has YouTube link' do
    visit_page '/test_page'

    link = "a[href=\"https://www.youtube.com/#{site.youtube}\"]"
    expect(page).to have_selector "footer #cms-youtube #{link}"

    expect(page).to have_selector 'footer #cms-youtube a .fa-youtube-play'
  end

  context 'no youtube' do
    it 'does not show YouTube link' do
      site.youtube = nil
      site.save!
      visit_page '/test_page'
      expect(page).to_not have_selector 'footer #cms-youtube'
    end
  end

  it 'has LinkedIn link' do
    visit_page '/test_page'

    link = "a[href=\"https://www.linkedin.com/in/#{site.linkedin}\"]"
    expect(page).to have_selector "footer #cms-linkedin #{link}"

    expect(page).to have_selector 'footer #cms-linkedin a .fa-linkedin-square'
  end

  context 'no linkedin' do
    it 'does not show LinkedIn link' do
      site.linkedin = nil
      site.save!
      visit_page '/test_page'
      expect(page).to_not have_selector 'footer #cms-linkedin'
    end
  end

  it 'has GitHub link' do
    visit_page '/test_page'

    link = "a[href=\"https://github.com/#{site.github}\"]"
    expect(page).to have_selector "footer #cms-github #{link}"

    expect(page).to have_selector 'footer #cms-github a .fa-github'
  end

  context 'no github' do
    it 'does not show GitHub link' do
      site.github = nil
      site.save!
      visit_page '/test_page'
      expect(page).to_not have_selector 'footer #cms-github'
    end
  end

  it 'does not show social networks when none' do
    site.facebook = nil
    site.twitter = nil
    site.youtube = nil
    site.linkedin = nil
    site.github = nil
    site.save!
    visit_page '/test_page'
    expect(page).to_not have_selector 'footer #cms-social-network-links'
  end
end
