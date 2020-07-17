const subjects = [
    {
      title: "English",
      isCompulsory: true,
    },
    {
      title: "Mathematics",
      isCompulsory: true,
    },
    {
      title: "Basic Science",
      isCompulsory: true,
    },
    {
      title: "Social studies",
      isCompulsory: true,
    },
    {
      title: "Security eductation",
      isCompulsory: true,
    },
    {
      title: "Geography",
      isCompulsory: true,
    },

    {
      title: "Literature",
      isCompulsory: true,
    },
    {
      title: "Agriculture science",
      isCompulsory: true,
    },
    { title: "Home Economics", isCompulsory: true },
    { title: "French", isCompulsory: false },
    { title: "CRS/IRK", isCompulsory: true },
    { title: "Yoruba", isCompulsory: true },
    { title: "Computer science", isCompulsory: true },
    { title: "Music", isCompulsory: true },
    { title: "P.H.E", isCompulsory: true },
  ],
  Classes = {
    junior: [
      {
        title: "jss1",
        subjects,
      },
      {
        title: "jss1",
        subjects,
      },
      {
        title: "jss2",
        subjects,
      },
    ],
    senior: {
      title: "senior",
      department: {
        humanities: [
          {
            title: "Mathematics",
            isCompulsory: true,
          },
          {
            title: "English",
            isCompulsory: true,
          },

          { title: "CRS/IRK", isCompulsory: true },

          { title: "French", isCompulsory: false },

          { title: "Yoruba", isCompulsory: false },

          { title: "History", isCompulsory: true },

          { title: "Biology", isCompulsory: true },

          { title: "Government", isCompulsory: true },

          { title: "Civic Education", isCompulsory: true },

          { title: "CRS/IRK", isCompulsory: true },

          { title: "CRS/IRK", isCompulsory: true },

          { title: "CRS/IRK", isCompulsory: true },

          { title: "CRS/IRK", isCompulsory: true },
        ],
        sciences: [
          {
            title: "English",
            isCompulsory: true,
          },
          {
            title: "Mathematics",
            isCompulsory: true,
          },

          { title: "Biology", isCompulsory: true },
          { title: "Physics", isCompulsory: true },
          { title: "Chemistry", isCompulsory: true },
          { title: "Agriculture", isCompulsory: false },
          { title: "Geography", isCompulsory: false },
          { title: "Social studies", isCompulsory: true },
          { title: "Economics", isCompulsory: false },
          { title: "Further Mathematics", isCompulsory: false },
          { title: "Yoruba", isCompulsory: true },
          { title: "Catering craft", isCompulsory: false },
        ],
        business: [
          {
            title: "English",
            isCompulsory: true,
          },
          {
            title: "Mathematics",
            isCompulsory: true,
          },
          { title: "Biology", isCompulsory: true },
          { title: "Commerce", isCompulsory: true },
          { title: "Econmics", isCompulsory: true },
          { title: "Social studies", isCompulsory: true },
        ],
      },
    },
  };
module.exports = Classes;
