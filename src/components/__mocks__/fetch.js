export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"hard",
            "question":"'The Big Bang Theory' was first theorized by a priest of what religious ideology?",
            "correct_answer":"Catholic",
            "incorrect_answers":["Christian","Jewish","Islamic"]},
            {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"hard",
            "question":"Which of the following is NOT a word used to describe an earthquake?",
            "correct_answer":"Drop-slide",
            "incorrect_answers":["Foreshock","Strike-slip","Temblor"]}
        ])
   
    })
  }