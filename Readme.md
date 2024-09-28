#This is not my first project





npm install mongoose-aggregate-paginate-v2              Super Power of MongoDB which are used in Development
Aggregating: It's like gathering data and processing it in a specific way. For example, if you want to find all videos with a specific tag, group videos by their categories, or count how many views a video has, you would use aggregation. You can think of it like organizing and filtering the data to get exactly what you need from a large collection of videos.

Paginating: When you have a lot of videos (like on YouTube), it wouldn't be practical to show all of them at once. So, you split them into pages. For example, you might want to show 10 videos on each page. Pagination allows users to see a small number of videos at a time and navigate through different pages.







npm i bcrypt            Bcrypt is used to encrypt the passwords and stuff 





 jsonwebtoken




 pre Hook :- pre Hook works just before somethings happens. For Instance, it can work on something just before the data is getting saved. We can encrypt the data just before the data is getting saved in the database






this.password = decrypt.hash(this.password, 10)

 this.password: This would be the password you want to hash or verify.
10: This usually represents the salt rounds, which determine the computational cost of hashing. A higher number increases security but requires more processing time.




Access Tokens
What are they?
Think of an access token like a ticket you get when you enter the movie theater. This ticket proves that you've paid and you're allowed to be inside.
How do they work?
Once you log in to the website, you get an access token. Whenever you want to watch a movie or do something else on the website, you show this "ticket" (access token) to prove you're allowed to use the site.
But the ticket (access token) expires after a short time (like 1 day), so you can’t keep using the same one forever.
Refresh Tokens
What are they?

The refresh token is like a special pass that lets you get a new movie ticket (access token) without needing to pay or log in again.
How do they work?

When your access token expires, you don't have to log in all over again. Instead, you show your special pass (refresh token) to get a new ticket and keep watching movies without interruption.
This special pass lasts longer (e.g., 10 days) so you can keep getting new tickets without logging in for a while.
The Secrets
Why do we need them?
The secrets are like the hidden codes that only the movie theater knows. They’re used to check whether the ticket or pass you’re using is real and hasn’t been faked or copied.
Without these secret codes, someone could fake a ticket and use the website without actually logging in.
Can you work without them?
Without tokens: Imagine if every time your ticket expired, you had to go back to the front desk and pay again or log in every time you wanted to watch a new movie. It would be a hassle!

Without secrets: If the theater didn’t check your ticket carefully with a secret code, anyone could sneak in, which would be unfair to people who paid.

Why use them?
Tokens make it easy for you to keep watching movies (or using the website) without constantly needing to log in again.
Secrets make sure that only real, valid tickets are being used, keeping the website secure from fake users.




npm i cloudinary




npm i multer            


data flow
multer-------------->local Server-------------->cloudinary---------------->cloud Server