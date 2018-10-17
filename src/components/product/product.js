import productTemplate from './product.handlebars';
import 'jquery';

$(document).ready(function () {
  var productDiv = $('#product');

  productDiv.html(productTemplate({
    productURL: "../../static/product.jpg",
    imageAlt: "productImage",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis mi tortor, et condimentum nisi pretium quis.
    Cras volutpat nisl at ultricies pretium.Aliquam fringilla porta mattis.Nulla sollicitudin purus et justo blandit, a
    ornare ipsum gravida.Vestibulum quis tortor nibh.Nulla tempus tempor malesuada.Phasellus sodales volutpat metus, ac
    sodales urna fermentum sit amet.Mauris varius pellentesque erat, ac ullamcorper eros accumsan tempus.Quisque commodo
    nisi eros, eget tristique magna interdum quis.Praesent vel congue tortor.Duis eget dictum nulla.

    Mauris sodales tellus tincidunt mauris hendrerit, vitae posuere ipsum accumsan.Aliquam vel malesuada lectus, vel
    ultrices libero.Sed ac sodales arcu.Nulla pretium tellus ex.Cras massa orci, semper quis blandit tincidunt,
      scelerisque nec nibh.Nunc aliquet enim nec magna vestibulum, sit amet condimentum mauris rhoncus.Proin vel mauris vel
    ipsum viverra consequat.

    Morbi accumsan neque eu sem scelerisque iaculis.Aliquam erat volutpat.Maecenas nec nibh fringilla, dictum justo ut,
      facilisis orci.Maecenas eget molestie augue.Quisque pellentesque finibus neque quis faucibus.Etiam lacinia odio eu
    orci elementum dictum.Suspendisse eu nisi lectus`
  }));
})