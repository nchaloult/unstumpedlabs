$(document).ready(function() {

    setTimeout(function() {
        $('#info-container').animate({opacity: 1.0, top: '50%'}, {duration:500});
    }, 100);

    setTimeout(function() {
        $('#particles-js').animate({opacity: 1.0}, {duration: 500});
    }, 300);

    $('#complete').click(function() {
        $('#particles-js').fadeOut(500);
        $('#info').fadeOut(500, restructure());
    });

    function restructure() {
        setTimeout(function() {
            $('#info').css('visibility', 'hidden');
        }, 500);

        setTimeout(function() {
            $('body').append("<div class=\"container\"><div id=\"header\"><img src=\"res/logo.png\"><br><br><input onclick=\"window.location=\'about.html\';\" type=\"submit\" name=\"about\" value=\"Learn More About Us\"></div></div><div id=\"content\" class=\"container\"><div class=\"col-half\"><div class=\"card shadow\"><h2>Supplemental Information</h2><div class=\"col-6\"><p>School/University</p><input type=\"text\" name=\"school\" placeholder=\"Georgia Institute of Technology\"></div><div class=\"col-3\"><p>Course Name</p><input type=\"text\" name=\"school\" placeholder=\"GT1000\"></div><h2 style=\"margin-top: 3em;\">Personal Evaluation</h2><div class=\"col-half\"><p>Rank your class performance:</p><select><option>1 (poor)</option><option>2</option><option>3</option><option>4</option><option>5 (excellent)</option></select></div><div class=\"col-half\"><p>Enthusiasm towards group members:</p><select><option>1 (realistic)</option><option>2</option><option>3 (tolerant)</option><option>4</option><option>5 (ignorant)</option></select></div></div></div><div class=\"col-half\"><div class=\"card shadow\"><h2>Group Information</h2><p>Name of most contributing member</p><input type=\"text\" name=\"most\" placeholder=\"John Doe\"><p>Name of least contributing member</p><input type=\"text\" name=\"least\" placeholder=\"Stan Smith\"><div class=\"col-half\"><p>Charisma among group members:</p><select><option>1 (I don't know their names)</option><option>2</option><option>3</option><option>4</option><option>5 (partners in crime)</option></select></div><div class=\"col-half\"><p>Professor's previously demonstrated leniency:</p><select><option>1 (we need a miracle idea)</option><option>2</option><option>3</option><option>4</option><option>5 (relax on our order)</option></select></div></div></div></div>");
            $('#content').append("<div class=\"col-9\"><div class=\"card shadow\" style=\"width: 60%;\"><textarea placeholder=\"Any additional comments or instructions concerning your request?\"></textarea><input type=\"submit\" value=\"Submit\"></div></div>")
            $('body').append("<div id=\"footer\"><div class=\"container\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel suscipit dui. Nulla maximus, ligula vel maximus luctus, diam quam elementum nisl, in finibus tortor arcu in metus. Vivamus vel orci non mi ultricies ultrices. Etiam non purus varius, hendrerit mauris ut, elementum ex.</p></div></div>")
            $('#header').css('visibility', 'visible').animate({opacity: 1.0}, {duration: 400});
            $('#content').css('visibility', 'visible').animate({opacity: 1.0}, {duration: 400});
        }, 750);
    }

});
