$(document).ready(function(){
  
  var deepLinks = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
      url: 'scripts/deep.json',
      ttl: 1
    }
  });
  
  $('.typeahead').typeahead({
        hint: true,
        highlight: false, 
        minLength: 2
      },
    {
    name: 'deep-links',
    display: 'title',
    source: deepLinks,
    limit: 'Infinity',
    templates: {
      empty: [
        '<div class="empty-message">',
          'No results',
        '</div>'
      ].join('\n'),
      suggestion: function(data) {
          return '<div class="c-list"><p class="mb-0"><a href="#'+ data.cat_ref +'" class="badge c-bg-'+ data.cat_bg +' text-monospace text-uppercase">' + data.cat + '</a> <a href="' + data.url + '">' + data.title + '</a></p></div>';
      }
    }
  });  
  
});