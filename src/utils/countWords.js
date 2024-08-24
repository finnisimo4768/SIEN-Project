const countWords = (setWordCount, textValue, setSelectedRadio) => {
  const text = textValue.trim();

  const words = text.split(/\s+/);
  const wordFrequency = {};

  words.forEach((word) => {
    word = word.replace(/[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ]/g, "").toLowerCase();
    if (word) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  });

  let jsonArray = Object.entries(wordFrequency).map(([word, count]) => ({
    word,
    count,
  }));

  switch (setSelectedRadio) {
    case "Ascending":
      jsonArray.sort((a, b) => a.count - b.count);
      break;
    case "Descending":
      jsonArray.sort((a, b) => b.count - a.count);
      break;
    case "Normal":
    default:
      break;
  }

  setWordCount(jsonArray);
};

export default countWords;
