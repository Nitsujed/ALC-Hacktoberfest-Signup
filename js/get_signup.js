$.get(
  'https://nitsujed.github.io/ALC-Hacktoberfest-Signup/README.md',

  function(file) {
    const census_md = file.split('### Census')[1].split('\n');
    let census_count = 0;

    census_md.map(user => {
      if(!user) {
        return;
      }

      return {
        name: user.substring(user.lastIndexOf('[') + 1, user.lastIndexOf(']')),
        url: user.substring(user.lastIndexOf('(') + 1, user.lastIndexOf(')')),
      }
    })
    .sort((user1, user2) => {
      return user1.name.localeCompare(user2.name)
    })
    .forEach(user => {
    	if(user) {
        $('#census-list').append(`<span class='tag is-large is-rounded '><a href="${user.url}">${user.name}</a></span><br><br>`);
        census_count++;
      }
    });

    $('#census-count').html(`${census_count} Contributors:`);
  }
);
