var Assets = (function() {

    if (window.location) {
        var hash = window.location.hash;
        if (hash == "#showTestBranding") {
            if (window.sessionStorage) {
                window.sessionStorage.setItem("branding.mode", "test");
                window.location.hash = "";
                window.location.reload();
                return;
            }
        }
    }

    var testMode = function () {
        try {
            if (window.sessionStorage) {
                return window.sessionStorage.getItem("branding.mode") == "test";
            }
        } catch ( e ) {
            console.warn("Access denied to window.sessionStorage. Check browser cookie settings.");
            return false;
        }

        return false;
    };

    var addQueryParams = function (url, n, v) {
        if (url.indexOf("?") > 0) {
            return url + "&" + n + "=" + v;
        }
        return url + "?" + n + "=" + v;
    };

    var addURL = function (url) {
        var url2 = url;
        if (testMode()) {
            url2 = addQueryParams(url2, "t", "true");
        }

        document.open();
        document.write("<link type='text/css' rel='stylesheet' href='" + url2 + "' />");
        document.close();
    };
    
    var forEach = function (elements, func) {
        for (var key in elements) {
            if (elements.hasOwnProperty(key)) {
                func(key, elements[key]);
            }
        }
    };

    var addStylesheets = function (urls) {
        if (typeof urls === 'string') {
            addURL(urls);

        } else if (Object.prototype.toString.call(urls) === '[object Array]') {
            forEach(urls, function(index, value) {
                addURL(value);
            });
        }
    };

    function getAssets(context, success) {
        $.ajax({
            url: "/asset/resourceText/" + context,
            method: "GET",
            cache: true,
            dataType: "json",
            success: success
        })
    }

    function textSubstitute(data) {
        $("[data-assettext]").each(function () {
            var replaceName = $(this).attr('data-assettext');
            if (data.hasOwnProperty(replaceName)) {
                var htmls = [];
                var lines = data[replaceName].split("\\n");
                var tmpDiv = jQuery(document.createElement('div'));
                for (var i = 0; i < lines.length; i++) {
                    htmls.push(tmpDiv.text(lines[i]).html());
                }
                $(this).html(htmls.join("<br>"));
            }
        });
    }

    var dataTextSubstitution = function (context) {
        dataTextSubstitutionWithCallback(context);
    };

    var dataTextSubstitutionWithCallback = function (context, callback) {
        getAssets(context, function(data) {
            $(document).ready(function() {
                if (typeof callback === 'function') {
                    callback(data);
                }
                textSubstitute(data);
            });
        });
    };

    /**
     * Finds the resource with name <code>resourceName</code> and calls the <code>callback</code> with
     * the found resource text.
     */
    var getResourceTextByName = function (context, resourceName, callback) {
        getAssets(context, function (data) {
            callback(data[resourceName]);
        });
    };

    return {
        addStyleSheets : addStylesheets,
        substituteText : dataTextSubstitution,
        getResourceTextByName : getResourceTextByName,
        substituteTextWithCallback : dataTextSubstitutionWithCallback
    }
})();

var mpgs = mpgs ? mpgs : {};

mpgs.footer = (function() {
  return {
    buildAndDisplayFooterLinks: function(data, parentFooterNode) {
      var footerLinksNode;
      var footerLink = function(i, type) {
        return 'footer_links_' + i + (type === undefined ? '' : ('_' + type));
      };

      var i = 0;
      var footerLinkText;
      var footerLinkUrl;

      while ((footerLinkText = data[footerLink(i, 'text')]) !== undefined &&
             (footerLinkUrl = data[footerLink(i, 'url')]) !== undefined) {
        footerLinksNode = footerLinksNode ? footerLinksNode : $('<div id="footerLinks"></div>');
        var footerLinkNode = $('<a></a>').attr('href', footerLinkUrl)
          .attr('rel', 'noopener noreferrer')
          .attr('id', footerLink(i))
          .text(footerLinkText);
        footerLinksNode.append(footerLinkNode);
        i++;
      }

      if (typeof footerLinksNode !== 'undefined') {
        footerLinksNode.insertBefore(parentFooterNode);
      }
    }
  };
})();