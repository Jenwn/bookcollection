'use strict'

const {db, models: {User, Books, Readlog} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  const mango = await User.create({
    username:'mango',
    password:'123'
  })

  const bookCollection = await Promise.all([
    Books.create({ title:"The Hitchhiker's Guide to the Galaxy", author:"Douglas Adams", description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide ('A towel is about the most massively useful thing an interstellar hitchhiker can have') and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.", image:"https://images.gr-assets.com/books/1388282444l/386162.jpg", status:"collection", userId: mango.id }),
    Books.create({ title:"Wuthering Heights", author:"Emily Brontë", description:"You can find the redesigned cover of this edition HERE.This best-selling Norton Critical Edition is based on the 1847 first edition of the novel. For the Fourth Edition, the editor has collated the 1847 text with several modern editions and has corrected a number of variants, including accidentals. The text is accompanied by entirely new explanitory annotations.New to the fourth Edition are twelve of Emily Bronte's letters regarding the publication of the 1847 edition of Wuthering Heights as well as the evolution of the 1850 edition, prose and poetry selections by the author, four reviews of the novel, and poetry selections by the author, four reviews of the novel, and Edward Chitham's insightful and unformative chronology of the creative process behind the beloved work.Five major critical interpretations of Wuthering Heights are included, three of them new to the Fourth Edition. A Stuart Daley considers teh mimportance of chronology in the novel. J. Hillis Miller examines Wuthering Heights's problems of genre and critical reputation. Sandra M. Gilbert asseses the role of Victorian Christianity plays in the novel, while Martha Nussbaum traces the novel's romanticism. Finally, Lin Haire-Sargeant scrutinizes the role of Heathcliff in film adaptations of Wuthering Heights. A Chronology and updated Selected Bibliography are also included.", image:"https://images.gr-assets.com/books/1388212715l/6185.jpg", status:"collection", userId: mango.id }),
    Books.create({title: "The Da Vinci Code",
      author: "Dan Brown",
      description: "An ingenious code hidden in the works of Leonardo da Vinci.A desperate race through the cathedrals and castles of Europe.An astonishing truth concealed for centuries . . . unveiled at last.While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",image: "https://images.gr-assets.com/books/1303252999l/968.jpg", status:"collection", userId: mango.id}),
      Books.create({title: "Memoirs of a Geisha",
      author: "Arthur Golden",
      description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.",
      image: "https://images.gr-assets.com/books/1388367666l/930.jpg",status:"collection", userId:users[0].id})
      ,
      Books.create({title: "Alice's Adventures in Wonderland & Through the Looking-Glass",
      author: "Lewis Carroll",
      description: "' I can't explain myself, I'm afraid, sir,' said Alice, 'Because I'm not myself, you see.'When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
      image: "https://images.gr-assets.com/books/1327872220l/24213.jpg",status:"wishlist", userId:mango.id}),
      Books.create({title: "Alice",
      author: "Lewis Carroll",
      description: "' I can't explain myself, I'm afraid, sir,' said Alice, 'Because I'm not myself, you see.'When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
      image: "https://images.gr-assets.com/books/1327872220l/24213.jpg",status:"wishlist", userId:users[0].id})
      ,
      Books.create({title: "Les Misérables",
      author: "Victor Hugo",
      description: "Introducing one of the most famous characters in literature, Jean Valjean—the noble peasant imprisoned for stealing a loaf of bread—Les Misérables ranks among the greatest novels of all time. In it, Victor Hugo takes readers deep into the Parisian underworld, immerses them in a battle between good and evil, and carries them to the barricades during the uprising of 1832 with a breathtaking realism that is unsurpassed in modern prose. Within his dramatic story are themes that capture the intellect and the emotions: crime and punishment, the relentless persecution of Valjean by Inspector Javert, the desperation of the prostitute Fantine, the amorality of the rogue Thénardier, and the universal desire to escape the prisons of our own minds. Les Misérables gave Victor Hugo a canvas upon which he portrayed his criticism of the French political and judicial systems, but the portrait that resulted is larger than life, epic in scope—an extravagant spectacle that dazzles the senses even as it touches the heart.",
      image: "https://images.gr-assets.com/books/1525303092l/24280.jpg",status:"wishlist", userId:users[0].id}),
      Books.create({title: "Divergent",
      author: "Veronica Roth",
      description: "In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can't have both. So she makes a choice that surprises everyone, including herself.During the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are—and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she's chosen. But Tris also has a secret, one she's kept hidden from everyone because she's been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves . . . or it might destroy her.",
      image: "https://images.gr-assets.com/books/1328559506l/13335037.jpg",status:"collection", userId:users[0].id}),
      Books.create({title: "Jane Eyre",
      author: "Charlotte Brontë",
      description: "Fiery love, shocking twists of fate, and tragic mysteries put a lonely governess in jeopardy in JANE EYRE Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?",
      image: "https://images.gr-assets.com/books/1327867269l/10210.jpg",status:"wishlist", userId:mango.id}),
      Books.create({title: "Romeo and Juliet",
      author: "William Shakespeare",
      description: "In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love. The story is rather extraordinary in that the normal problems faced by young lovers are here so very large. It is not simply that the families of Romeo and Juliet disapprove of the lover's affection for each other; rather, the Montagues and the Capulets are on opposite sides in a blood feud and are trying to kill each other on the streets of Verona. Every time a member of one of the two families dies in the fight, his relatives demand the blood of his killer. Because of the feud, if Romeo is discovered with Juliet by her family, he will be killed. Once Romeo is banished, the only way that Juliet can avoid being married to someone else is to take a potion that apparently kills her, so that she is burried with the bodies of her slain relatives. In this violent, death-filled world, the movement of the story from love at first sight to the union of the lovers in death seems almost inevitable.What is so striking about this play is that despite its extraordinary setting (one perhaps reflecting Elizabethan attitudes about hot-blooded Italians), it has become the quintessential story of young love. Because most young lovers feel that they have to overcome giant obstacles in order to be together, because they feel that they would rather die than be kept apart, and especially because the language Shakespeare gives his young lovers is so exquisite, allowing them to say to each other just what we would all say to a lover if we only knew how, it is easy to respond to this play as if it were about all young lovers rather than about a particular couple in a very unusual world. (When the play was rewritten in the eighteen century as The History and Fall of Caius Marius, the violent setting became that of a particularly discordant period in classical Rome; when Leonard Berstein rewrote the play as West Side Story, he chose the violent world of New York street gangs.)",
      image: "https://images.gr-assets.com/books/1327872146l/18135.jpg",status:"wishlist", userId:users[1].id}),
      Readlog.create({date:"11/19/22", title:"Percy Jackson & The Lightning Thief", author:"Rick Riodan",comment:"This was my favorite book of the year by far.percy jackson was impossible to put down.I wish I could read percy jackson again for the first time.percy jackson was excellent, a real page-turner.percy jackson was fast-paced, engaging and suspenseful.Everything about percy jackson was beautifully complex.percy jackson kept me spell bound, and I was compelled to keep reading.There were scenes and lines that made me sit there and cry. Or laugh. Or cheer.I was blown away by the author’s ability to write such phenomenal scenes.percy jackson forced me to feel the characters' emotions.percy jackson has ruined me for all other books!I'll be thinking about percy jackson for a long time to come.", rating:"5", userId:mango.id})
      
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
