# Headings `<h>`

Headings in HTML are used to distinguish a title from the content. There are 6 levels of headings ranging from 1-6, with 1 creating the largest header and 6 creating the smallest.

An example:

`<h1>Observable Universe</h1>`
`<h2>Milky Way Galaxy</h2>`
`<h3>Earth</h3>`
`<h4>USA</h4>`
`<h5>NorFolk, VA</h5>`
`<h6>Main Street</h6>`

<h1>Observable Universe</h1>
<h2>Milky Way Galaxy</h2>
<h3>Earth</h3>
<h4>USA</h4>
<h5>NorFolk, VA</h5>
<h6>Main Street</h6>

It's important to follow the heading structure because many other software rely on the convention of the html heading structure for other uses, such as text to speech.

# Paragraphs `<p>`

Paragraphs `<p>` are the most used HTML element because they act as default block-level element and are easy to write.

An example:

```
<p>
  The sweet-faced and loving Labrador Retriever is actually one of the most
  popular dog breeds.
</p>

<p>
  Labs are extremely friendly with an easygoing and high-spirited personality
  which is great for bonding with the whole family.
</p>
```

<p>
  The sweet-faced and loving Labrador Retriever is actually one of the most
  popular dog breeds.
</p>

<p>
  Labs are extremely friendly with an easygoing and high-spirited personality
  which is great for bonding with the whole family.
</p>

# Spans `<span>`

The span element is used to group text together, usually for styling purposes (to style a certain text).

An example:

```
<style>
p {
  color: black;
}
.red {
  color:red;
}
</style>
<p>
This sentence needs some <span class="red">visual emphasis </span>
</p>
```

<style>
.black {
  color: black;
}
.red {
  color:red;
}
</style>
<p class="black">
This sentence needs some <span class="red">visual emphasis </span>
</p>

*There is an issue with markdown viewer where it will turn every character in the file black if the paragraph element is specified to be black in the style tag. So i just made that specific `<p>` black*

The letters of the everything in the paragraph is black except the ones contained within the span tag, which are red.

# Blockquotes `<blockquote>`

Blockquotes are used to identify a citation

An example:

<blockquote cite="https://www.wikiwand.com/en/Scooby-Doo_(character)">
<p>Ruh-roh--RAGGY!!!</p>

<footer>—Scooby Doo, <cite>Mystery Incorporated</cite></footer>

</blockquote>

# Line breaks `<br>`

Spacing between code in an HTML file does not affect hte positioning of elements in the browser, so they must be done manually. Line breaks are used to create a new line.

```
<p>
  I jump in delight<br />
  I run off in frenzy<br />
  For now I have just realized<br />
  that the fun has arrived<br />
  the fun has begun<br />
  jumping all on one piece<br />
  almost feeling like I can't breathe<br />
  blood rushing through me<br />
  a second, a beat<br />
  I feel the air on my face<br />
  My fur rising up<br />
  Free as free as it can be<br />
  That's what you feel<br />
  When your owner has arrived<br />
</p>
```

<p>
  I jump in delight<br />
  I run off in frenzy<br />
  For now I have just realized<br />
  that the fun has arrived<br />
  the fun has begun<br />
  jumping all on one piece<br />
  almost feeling like I can't breathe<br />
  blood rushing through me<br />
  a second, a beat<br />
  I feel the air on my face<br />
  My fur rising up<br />
  Free as free as it can be<br />
  That's what you feel<br />
  When your owner has arrived<br />
</p>