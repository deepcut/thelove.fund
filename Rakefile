task default: %w(publish)

desc 'Publish to GitHub Pages'
task :publish do
  sh 'git push'
  sh 'bundle exec middleman deploy'
  sh '######################'
  sh '# Publish Successful #'
  sh '######################'
end
