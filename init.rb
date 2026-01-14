require_relative 'lib/redmine_ui_customizer/hooks'

Redmine::Plugin.register :redmine_ui_customizer do
  name 'Redmine UI Customizer'
  author 'Ventura Development Team'
  description 'Customize Redmine UI elements across pages'
  version '1.0.0'
  url 'https://github.com/ZIGExN-VeNtura/redmine_ui_customizer'
  author_url 'https://github.com/orgs/ZIGExN-VeNtura/teams/r-and-d'

  settings default: { 'hide_delete_user_btn' => '1' }, partial: 'settings/redmine_ui_customizer'
end
