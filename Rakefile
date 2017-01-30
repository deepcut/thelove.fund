task default: %w(s)

desc 'Run the Middleman server'
task :s do
  sh 'bundle exec middleman'
end

desc 'Publish to GitHub Pages'
task :publish do
  sh 'git push'
  sh 'bundle exec middleman deploy'
  sh '######################'
  sh '# Publish Successful #'
  sh '######################'
end
