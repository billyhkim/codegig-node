const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => 
  Gig.findAll()
  .then(gigs => {
    console.log(gigs);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Simple WordPress website',
    technologies: 'WordPress, PHP, HTML, CSS',
    budget: '$1,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis consequat leo, id condimentum lacus. Nam blandit turpis eros, quis viverra tortor semper in. In nisi lorem, feugiat id fringilla et, scelerisque nec lacus. Nam hendrerit, urna vel eleifend fringilla, diam mauris gravida neque, sit amet condimentum turpis lacus ut leo. Sed aliquam fringilla imperdiet. Nam massa nisi, feugiat nec arcu nec, fringilla pulvinar augue.',
    contact_email: 'user2@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;