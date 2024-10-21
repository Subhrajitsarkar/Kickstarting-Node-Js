// http মডিউল ইমপোর্ট করা হচ্ছে
let http = require('http')

// সার্ভার তৈরি করা হচ্ছে এবং প্রতিটি রিকোয়েস্টকে হ্যান্ডেল করা হচ্ছে
// createServer() সার্ভার অবজেক্ট রিটার্ন করে
let server = http.createServer((req, res) => {
    console.log(req);
})
// সার্ভারটি ৩০০০ পোর্টে শোনা শুরু করবে
server.listen(3000)