module RedmineUiCustomizer
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context = {})
      scripts = []
      settings = Setting.plugin_redmine_ui_customizer

      if settings['hide_delete_user_btn'] == '1'
        scripts << javascript_include_tag('hide_delete_user_btn', plugin: :redmine_ui_customizer)
      end

      scripts.join("\n").html_safe
    end
  end
end
