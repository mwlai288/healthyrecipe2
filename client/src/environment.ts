const dev = {
 context: 'http://localhost:3000/'
}

const prod = {
 context: 'http://1808-demo-bucket-will.s3-website.us-east-2.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
 ? prod
 : dev
