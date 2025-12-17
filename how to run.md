# 1. Install Node.js dependencies (creates node_modules)

npm install

# 2. Install PHP dependencies (creates vendor)

composer install

# 3. Download the large video files (if they didn't come with the clone)

git lfs pull

# 4. Start the PHP server

php -S localhost:5000

# 5. Start the Node.js server

npm run dev
