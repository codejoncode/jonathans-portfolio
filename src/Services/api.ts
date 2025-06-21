import axios from "axios";

const api = axios.create({
  baseURL: "https://jonathan-holloway-be.onrender.com",
});

export const getProjects = () => api.get("/projects");
export const getLectures = () => api.get("/lectures");

// In case the backend goes down again
export const getDefaultProjects = () => {
  return [
    {
      id: 1,
      features:
        "React/Redux frontend, Semantic UI, PostgreSQL backend, Blog, Email via Nodemailer, Downloadable resume, Lectures from Teaching Assistant role at Lambda School",
      title: "Portfolio",
      description:
        "A portfolio site to showcase skills acquired through various coding courses.",
      technologies: "FullStack Node PostgreSQL React Redux Semantic-UI",
      image: "https://i.ibb.co/TgRjNp6/portofoilo-site.png",
      gif: "https://gfycat.com/responsiblepeskycolt",
      gifplay: "https://gfycat.com/ifr/ResponsiblePeskyColt",
      githuburl:
        "https://github.com/codejoncode/Jonathan-Holloway, https://github.com/codejoncode/jonathan-holloway-be",
      plan: null,
      deployurl: "http://www.jonathanjholloway.com",
    },
    {
      id: 2,
      features:
        "Google Firebase  serverless backend, Google Cloud functions, Ability to review recent activity, Ability to follow / unfollow a user, Crud operations on events,  View Google Maps for location of event, Google places used when setting the location of an event,  Chat in real time regarding an event, Login via Auth0  Google and Facebook or as non-social media account, Redux Forms, Redux toastr notifications, Auth 0 login,  Simple login/register, ability to create an event, ability to edit event, ability to cancel an event, ability for a user to join an event, Google places for choosing where an event is,  Google maps for viewing where an event is, Follow a user or unfollow, Edit Profile information, Upload photos, Redux Forms, Google Cloud functions, and more",
      title: "Fleek Session",
      description:
        "An events app where users can sign up, post, and chat about events.",
      technologies: "Firebase Semantic-UI React Redux FullStack",
      image: "https://i.ibb.co/5FPkQz4/fleek-session-landing-page.png",
      gif: "https://gfycat.com/frenchlividblackbear",
      gifplay: "https://gfycat.com/ifr/FrenchLividBlackbear",
      githuburl: "https://github.com/codejoncode/the-events-app",
      plan: null,
      deployurl: "https://the-events-app.firebaseapp.com/",
    },
    {
      id: 3,
      features:
        "Follow list, Ability to follow/unfollow users, Edit profile, Invite users to forums, Search for users, Role adjustment on teams",
      title: "Symposium",
      description: "A 5-week collaborative project with a team of developers.",
      technologies: "React Redux PostgreSQL FullStack Node",
      image: "https://i.ibb.co/SBzsBzw/Symposium.png",
      gif: "https://gfycat.com/zealousdecentandeancat",
      gifplay: "https://gfycat.com/ifr/ZealousDecentAndeancat",
      githuburl:
        "https://github.com/labs11-social-board/labs11_social_boardFE, https://github.com/labs11-social-board/labs11_social_boardBE",
      plan: null,
      deployurl: "https://socialapp2.netlify.com/",
    },
    {
      id: 4,
      features:
        "Create/Edit/Delete notes, Rhyme API, Export to CSV, Search notes, Drag and drop sorting, Backend API integration",
      title: "Notetaking App",
      description:
        "A 4-day React and Redux project with backend implementation.",
      technologies: "JavaScript Node Redux FullStack",
      image: "https://i.ibb.co/HgHYCyb/note-Taking-App.png",
      gif: "https://gfycat.com/hilariousanyarabianoryx",
      gifplay: "https://gfycat.com/ifr/HilariousAnyArabianoryx",
      githuburl:
        "https://github.com/codejoncode/front-end-project-week, https://github.com/codejoncode/back-end-project-week",
      plan: null,
      deployurl: "https://notetakingapp.netlify.com/",
    },
    {
      id: 5,
      features:
        "Pusher notifications, Backend-frontend connection, Login/Registration setup, Displays a map",
      title: "Lambda Mud",
      description: "A 4-day project testing Python and Django knowledge.",
      technologies: "Python Django JavaScript React FullStack",
      image: "https://i.ibb.co/d2Np2cJ/lambda-Mud.png",
      gif: "https://gfycat.com/gloomyportlyincatern",
      gifplay: "https://gfycat.com/ifr/GloomyPortlyIncatern",
      githuburl:
        "https://github.com/codejoncode/LambdaMUD-Project, https://github.com/codejoncode/LambdaMUD-Client",
      plan: null,
      deployurl: "https://silly-spence-1e4f95.netlify.com/",
    },
    {
      id: 6,
      features:
        "Graph traversal algorithm, Displays full map of 500 rooms, Exact location tracking, Room selection via BFS, Item collection",
      title: "Lambda Treasure Hunt",
      description: "Illustrates graph traversal with automated exploration.",
      technologies: "React JavaScript Bootstrap Algorithms",
      image: "https://i.ibb.co/5xv5cHX/Lambda-Treasure-Hunt.png",
      gif: "https://gfycat.com/singleweepyasp",
      gifplay: "https://gfycat.com/ifr/SingleWeepyAsp",
      githuburl: "https://github.com/codejoncode/lambda_treasure_hunt",
      plan: null,
      deployurl: "https://codejoncode.github.io/lambda_treasure_hunt/",
    },
    {
      id: 7,
      features: "Team data display, Player data display",
      title: "Hash History Basketball League",
      description: "React router and data display.",
      technologies: "React JavaScript",
      image: "https://i.ibb.co/W03FZs5/basketball-League.png",
      gif: "https://gfycat.com/rewardingrepulsivegermanpinscher",
      gifplay: "https://gfycat.com/ifr/RewardingRepulsiveGermanpinscher",
      githuburl: "https://github.com/codejoncode/HashHistoryBasketballLeague",
      plan: null,
      deployurl: "https://codejoncode.github.io/HashHistoryBasketballLeague/",
    },
    {
      id: 8,
      features:
        "Backtracking algorithm, Puzzle solver, Difficulty adjustment, Timer",
      title: "Sudoku",
      description: "A classic game of Sudoku.",
      technologies: "JavaScript React Algorithms",
      image: "https://i.ibb.co/fCXdBYV/sudoku.png",
      gif: "https://gfycat.com/welldocumentedkindisabellineshrike",
      gifplay: "https://gfycat.com/ifr/WelldocumentedKindIsabellineshrike",
      githuburl: "https://github.com/codejoncode/Sudoku",
      plan: null,
      deployurl: "https://codejoncode.github.io/Sudoku/",
    },
    {
      id: 9,
      features:
        "Sample cell configurations, Random cell generation, Additional cell properties, User-defined grid size",
      title: "Conway’s Game of Life",
      description: "Run various Game of Life scenarios.",
      technologies: "React JavaScript Algorithms",
      image: "https://i.ibb.co/y4DPTyv/conways-Game.png",
      gif: "https://gfycat.com/bouncygargantuanhammerkop",
      gifplay: "https://gfycat.com/ifr/BouncyGargantuanHammerkop",
      githuburl: "https://github.com/codejoncode/Conways-Life",
      plan: null,
      deployurl: "https://codejoncode.github.io/Conways-Life/",
    },
    {
      id: 10,
      features:
        "Event listeners, Custom carousel, Hover effects, Multi-page navigation",
      title: "User Interface Project Week",
      description: "CSS and UI design implementation.",
      technologies: "LESS JavaScript Design",
      image: "https://i.ibb.co/k3zDSFG/ui-design.png",
      gif: "https://gfycat.com/orangedeafeninggodwit",
      gifplay: "https://gfycat.com/ifr/OrangeDeafeningGodwit",
      githuburl: "https://github.com/codejoncode/User-Interface-Project-Week",
      plan: null,
      deployurl: "http://high-pitched-cloth.surge.sh/",
    },
  ];
};

export const getDefaultLectures = () => {
  return [
    {
      id: 1,
      title: "Web Server Guided Project I",
      url: "https://www.youtube.com/embed/lxuyCxw_sg4",
    },
    {
      id: 2,
      title: "Web Server Guided Project II",
      url: "https://www.youtube.com/embed/KWKR4tXLqW8",
    },
    {
      id: 3,
      title: "Web Server Guided Project III",
      url: "https://www.youtube.com/embed/otxoIXgr6Tk",
    },
    {
      id: 4,
      title: "Web Server Guided Project IV",
      url: "https://www.youtube.com/embed/UH6QHhxB3TQ",
    },
    {
      id: 5,
      title: "CS14 After Hours Algorithms",
      url: "https://youtube.com/embed/0hxTxisL6oo",
    },
  ];
};
