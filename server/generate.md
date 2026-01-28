1️⃣ Users
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,role:string,avatarUrl:string,isActive:boolean

2️⃣ Profiles (1:1 dengan User)
npx sequelize-cli model:generate --name Profile --attributes userId:integer,age:integer,gender:string,address:string,city:string,country:string,background:text,phoneNumber:string

3️⃣ Classes
npx sequelize-cli model:generate --name Class --attributes code:string,title:string,description:text,category:string,mentorId:integer,level:string,startDate:date,endDate:date,status:string,imageUrl:string

4️⃣ ClassUsers (pivot table many-to-many)
npx sequelize-cli model:generate --name ClassUser --attributes classId:integer,userId:integer,roleInClass:string,progressPercentage:integer,status:string,joinedAt:date

5️⃣ Meetings
npx sequelize-cli model:generate --name Meeting --attributes classId:integer,meetingNumber:integer,title:string,description:text,meetingDate:date,startHour:time,finishHour:time,imageUrl:string

6️⃣ Tasks
npx sequelize-cli model:generate --name Task --attributes classId:integer,meetingId:integer,title:string,description:text,dueDate:date,maxScore:integer,imageUrl:string

7️⃣ TaskSubmissions
npx sequelize-cli model:generate --name TaskSubmission --attributes taskId:integer,userId:integer,submissionUrl:string,score:integer,feedback:text,status:string,submittedAt:date

8️⃣ Notes
npx sequelize-cli model:generate --name Note --attributes classId:integer,meetingId:integer,createdBy:integer,content:text,imageUrl:string

9️⃣ Materials
npx sequelize-cli model:generate --name Material --attributes classId:integer,meetingId:integer,title:string,type:string,url:string,uploadedBy:integer,imageUrl:string
