import tabsTemplate from './tabs.handlebars';
import 'jquery';

$(document).ready(function () {
  var tabsDiv = $('#tabs');

  let tabsData = {
    tab: [
      {
        text: 'Home',
        ariaControls: 'tab-home',
        href: '#tab-home'
      },
      {
        text: 'Products',
        ariaControls: 'tab-products',
        href: '#tab-products',
        active: 'active',
      },
      {
        text: 'About',
        ariaControls: 'tab-about',
        href: '#tab-about'
      },
      {
        text: 'Contact',
        ariaControls: 'tab-contact',
        href: '#tab-contact'
      }
    ],
    tabPills: [
      {
        text: 'Apps',
        ariaControls: 'v-pills-apps',
        href: '#v-pills-apps',
        ariaSelected: false,
      },
      {
        text: 'Movies',
        ariaControls: 'v-pills-movies',
        href: '#v-pills-movies',
        ariaSelected: true,
        active: 'active',
      },
      {
        text: 'Games',
        ariaControls: 'v-pills-games',
        href: '#v-pills-games',
        ariaSelected: false,
      },
      {
        text: 'Books',
        ariaControls: 'v-pills-books',
        href: '#v-pills-books',
        ariaSelected: false,
      },
      {
        text: 'Newspapers',
        ariaControls: 'v-pills-newspapers',
        href: '#v-pills-newspapers',
        ariaSelected: false,
      }
    ],
    pillsContent: [
      {
        contentFor: 'v-pills-apps',
        content: 'Apps content'
      },
      {
        contentFor: 'v-pills-games',
        content: 'Games content'
      },
      {
        contentFor: 'v-pills-movies',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis mi tortor, et condimentum nisi pretium quis.
            Cras volutpat nisl at ultricies pretium. Aliquam fringilla porta mattis. Nulla sollicitudin purus et justo blandit, a
            ornare ipsum gravida. Vestibulum quis tortor nibh. Nulla tempus tempor malesuada. Phasellus sodales volutpat metus, ac
            sodales urna fermentum sit amet. Mauris varius pellentesque erat, ac ullamcorper eros accumsan tempus. Quisque commodo
            nisi eros, eget tristique magna interdum quis. Praesent vel congue tortor. Duis eget dictum nulla. Mauris sodales
            tellus tincidunt mauris hendrerit, vitae posuere ipsum accumsan. Aliquam vel malesuada lectus, vel ultrices libero. Sed
            ac sodales arcu. Nulla pretium tellus ex. Cras massa orci, semper quis blandit tincidunt, scelerisque nec nibh. Nunc
            aliquet enim nec magna vestibulum, sit amet condimentum mauris rhoncus. Proin vel mauris vel ipsum viverra consequat.
            Morbi accumsan neque eu sem scelerisque iaculis. Aliquam erat volutpat. Maecenas nec nibh fringilla, dictum justo ut,
            facilisis orci. Maecenas eget molestie augue. Quisque pellentesque finibus neque quis faucibus. Etiam lacinia odio eu
            orci elementum dictum. Suspendisse eu nisi lectus.`,
            active: 'show active'
      },
      {
        contentFor: 'v-pills-books',
        content: 'Books content'
      },
      {
        contentFor: 'v-pills-newspapers',
        content: 'Newspapers content'
      }
    ]
  }

  tabsDiv.html(tabsTemplate(tabsData));
})