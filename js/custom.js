var depositInterface = [
  {
    "constant": true,
    "inputs": [],
    "name": "totalPaidOut",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "depositCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "paidOut",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "check",
    "outputs": [
      {
        "name": "expires",
        "type": "uint256"
      },
      {
        "name": "deposit",
        "type": "uint256"
      }
    ],
    "type": "function"
  }
];
var depositContractAddress = '0xCD6608b1291d4307652592c29bFF7d51f1AD83d7';
var providerURL = 'https://mainnet.infura.io/Rg6BrBl8vIqJBc7AlL9h';

$(document).ready(function() {

	// --------------------------------------------------------
	//	Navigation Bar
	// -------------------------------------------------------- 		
	$(window).scroll(function(){	
		"use strict";	
		var scroll = $(window).scrollTop();
		if( scroll > 10 ){
			$(".navbar").addClass("scroll-fixed-navbar");				
		} else {
			$(".navbar").removeClass("scroll-fixed-navbar");
		}
	});	
	
	// --------------------------------------------------------
	//	Smooth Scrolling
	// -------------------------------------------------------- 	
	$(".navbar-nav li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1000, function(){
			window.location.hash = hash;
		});
	});
	
	// --------------------------------------------------------
	//	Scroll Up
	// -------------------------------------------------------- 	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});

	$('.scroll-up').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// --------------------------------------------------------
	//	Verify button
	// -------------------------------------------------------- 	
	$('#checkbutton').click(function() {
		if(web3 == undefined) {
			var web3 = new Web3();
			web3.setProvider(new web3.providers.HttpProvider(providerURL));
		}

		var address = $('#checkaddress').val();

		function callback(err, result) {
			if(err != null) {
				$('#checkresult').html('<h3><i class="ion-close-circled"></i> Error</h3><p>Sorry, an error occurred looking up the address: ' + err + '</p>');
			} else {
				var timestamp = result[0].toNumber();
				if(timestamp == 0) {
					// Not valid
					$('#checkresult').html("<h3><i class=\"ion-close-circled\"></i> Invalid Address</h3><p>Sorry, that doesn't appear to be the address of a genuine ether.card. If you believe it should be, please <a href=\"mailto:cards@arachnidlabs.com\">contact us</a> with a picture of the card.</p>");
				} else {
					var expires = new Date(timestamp * 1000);
					var value = web3.fromWei(result[1]);
					if(expires < new Date()) {
						// Expired
						$('#checkresult').html("<h3><i class=\"ion-checkmark-circled\"></i> Valid Card</h3><p>Yes! This is a valid Ether Card. However, its deposit and guarantee expired on <b>" + expires.toDateString() + "</b>.</p>");
					} else {
						// Valid
						$('#checkresult').html("<h3><i class=\"ion-checkmark-circled\"></i> Valid Card</h3><p>Yes! This is a valid Ether Card. A total of <b>" + value + " ether</b> was deposited into the guarantee account for it. The guarantee expires <b>" + expires.toDateString() + "</b>.</p>");
					}
				}
			}
		}

		try {
			var contract = web3.eth.contract(depositInterface).at(depositContractAddress);
			contract.check(address, callback);
		} catch(e) {
			callback(e, null);
		} 
	})
});

// --------------------------------------------------------
//	Collapse Navigation (Mobile) on click
// -------------------------------------------------------- 	
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

function addProduct(product) {
    Ecwid.Cart.addProduct(product);
    window.location.hash = '/#!/~/cart';
}
