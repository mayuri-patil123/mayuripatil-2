
<body>
    <h1>string functions</h1>
    <script>
        var str = "this is a string";
        console.log(str);
        // here str means string

        // first occurence of a substring where it gives us the number from where repeating letters starts from the beginning of a sentence
        // for this first occurence we use (indexof)
        var position = str.indexOf('is');
        console.log(position)

        // last occurence of a substring where it gives us the number from where repeating letters are at the end of the sentences
        // for this end occurence we use (lastindexof)
        var position = str.lastIndexOf('is');
        console.log(position);

        // substring for a string
        // var substr = str.slice(1,5);
        // in above var substr it gives us slice means it gives us a sentence break into pieces means words into particular letter
        var substr = str.substring(1,5);
        console.log(substr)
    </script>
</body>