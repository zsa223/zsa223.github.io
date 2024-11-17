#!/usr/bin/env ruby
#
# Check for changed posts

Jekyll::Hooks.register :posts, :post_init do |post|
  # Git의 커밋 히스토리에서 변경 횟수를 가져옵니다.
  commit_num = `git rev-list --count HEAD "#{post.path}"`

  if commit_num.to_i > 1
    lastmod_date = `git log -1 --pretty="%ad" --date=iso "#{post.path}"`
    post.data['last_modified_at'] = lastmod_date
  end

  # 'Diary' 태그가 포함된 포스트는 검색에서 제외할 수 있도록 속성을 추가합니다.
  if post.data['tags']&.include?('Diary')
    post.data['exclude_from_search'] = true
  end
end
