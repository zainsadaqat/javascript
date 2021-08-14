const objectLiteral = {
  name: 'Zain',
  age: 23,
  location: 'Pakistan',
  skills: ['html', 'css', 'javascript'],
  printData: function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}.`
    );
  },
  printSkills() {
    this.skills.forEach((skill, index) =>
      console.log(`${index + 1}. ${skill.toUpperCase()}`)
    );
  },
};

objectLiteral.printData();
objectLiteral.printSkills();