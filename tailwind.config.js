module.exports = {
  purge: [
    "./pages/index.tsx",
    "/pages/_app.tsx",
    "./components/Container.tsx",
    "./components/Header.tsx",
    ,
    "./components/JobList.tsx",
    ,
    "./components/Skill.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textDecoration: ["hover"],
    },
  },
  plugins: [],
};
