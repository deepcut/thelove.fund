task default: %w(s)

desc 'Run the Middleman server'
task :server do
  sh '#############################'
  sh '# Starting middleman server #'
  sh '#############################'

  sh 'bundle exec middleman'
end

desc 'Publish to GitHub Pages'
task :publish do
  sh '########################################'
  sh '# Pushing the latest changes to master #'
  sh '########################################'

  sh 'git push'

  sh '##############################'
  sh '# Publishing to GitHub Pages #'
  sh '##############################'

  sh 'bundle exec middleman deploy'

  sh '##################################################'
  sh '# Successfully published to https://thelove.fund #'
  sh '##################################################'
end

task s: :server
task p: :publish

