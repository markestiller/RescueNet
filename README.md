# RescueNet

## 💡 Inspiration💡

Our inspiration came from a common story that we have been seeing on the news lately - the wildfires that are impacting people on a nationwide scale. These natural disasters strike at uncertain times, and we don't know if we are necessarily going to be in the danger zone or not. So, we decided to ease the tensions that occur during these high-stress situations by acting as the middle persons.

## ? What it does ?

At RescueNet, we have two types of people with using our service - either subscribers or homeowners. The subscriber pays RescueNet monthly or annually at a rate which is cheaper than insurance! Our infrastructure mainly targets people who live in natural disaster-prone areas. In the event such a disaster happens, the homeowners will provide temporary housing and will receive a stipend after the temporary  guests move away. We also provide driving services for people to escape their emergency situations.

## 🔧 How we built it 🔧

We divided our work into the clientside and the backend. Diving into the clientside, we bootstrapped our project using Vite.js for faster loadtimes. Apart from that, React.js was used along with React Router to link the pages and organize the file structure accordingly. Tailwind CSS was employed to simplify styling along with Material Tailwind, where its pre-built UI components were used in the about page.

Our backend server is made using Node.js and Express.js, and it connects to a MongoDB Atlas database making use of a JavaScript ORM - Mongoose. We make use of city data from WikiData, geographic locations from GeoDB API, text messaging functionality of Twilio, and crypto payment handling of Circle.  

## 🤔 Challenges we ran into 🤔

Some challenges we ran into initially is to make the entire web app responsive across devices while still keeping our styles to be rendered. At the end, we figured out a great way of displaying it in a mobile setting while including a proper navbar as well. In addition, we ran into trouble working with the Circle API for the first time. Since we've never worked with cryptocurrency before, we didn't understand some of the implications of the code we wrote, and that made it difficult to continue with Circle.

## 🏆 Accomplishments that we're proud of 🏆

An accomplishment we are proud of is rendering the user dashboard along with the form component, which allowed the user to either enlist as a subscriber or homeowner. The info received from this component would later be parsed into the dashboard would be available for show.

We are also proud of how we integrated Twilio's SMS messaging services into the backend algorithm for matching subscribers with homeowners. This algorithm used information queried from our database, accessed from WikiData, and returned from various API calls to make an "optimal" matching based on distance and convenience, and it was nice to see this concept work in real life by texting those who were matched.


## 🤓 What we learned 🤓

We learned many things such as how to use React Router in linking to pages in an easy way. Also, leaving breadcrumbs in our Main.jsx allowed us to manually navigate to such pages when we didn't necessarily had anything set up in our web app. We also learned how to use many backend tools like Twilio and Circle. 

## 👀 What's next for RescueNet 👀

What's next for RescueNet includes many things. We are planning on completing the payment model using Circle API, including implementing automatic monthly charges and the ability to unsubscribe. Additionally, we plan on marketing to a few customers nationwide, this will allow us to conceptualize and iterate on our ideas till they are well polished. It will also help in scaling things to include countries such as the U.S.A and Mexico.
