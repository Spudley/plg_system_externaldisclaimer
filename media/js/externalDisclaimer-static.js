/*
 * Popup message if clicking on an external link.
 * Excludes local links within our sub-domains.
 */
(function($) {
    var externalRedirects = [
        "task=weblink\\.go"
    ];
    var disclaimer = 'Please be advised that this is a link to an external website. The operators of the YJ Resource Hub cannot accept any responsibility for the content of this site.';

    $(document).on('click','a', function() {
        var isLocal = !this.hostname || this.hostname.match(/yjresourcehub\.uk$/);
        if (isLocal && !hasExternalRedirects($(this).attr('href'))) {
            return true;    //no alert needed for internal links.
        }

        return confirm(disclaimer);
    });

    var hasExternalRedirects = function(str) {
        for (i=0; i<externalRedirects.length;i++) {
            if(str.match(RegExp(externalRedirects[i]))) {
                return true;
            }
        }
        return false;
    }
})(jQuery);