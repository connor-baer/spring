---
layout: page
title: Say hello!
menu: Contact
order: 5
description: Let’s be friends! Say hi on <a href="https://twitter.com/connor_baer" class="strong link">Twitter</a>, read my stories on <a href="https://medium.com/@connor_baer" class="strong link">Medium</a> or shoot me an <a href="mailto:hello@connorbaer.io&body=Hi Connor! Let's be creative together…" class="strong link">email</a>.
---
<div class="ctnr-golden">
    <form action="//formspree.io/hello@connorbaer.io"
          method="POST">
        <label for="name">What’s your name?</label>
        <input type="text" name="name" placeholder="Jane" required="true" autofocus="true">
        <label for="_replyto">What’s your email address?</label>
        <input type="email" name="_replyto" placeholder="jane@example.io" required="true">
        <label for="message">What can I do for you?</label>
        <textarea type="text" name="message" placeholder="Hi Connor! Let's be creative together…" required="true"></textarea>
        <input type="hidden" name="_subject" value="Someone wants to say hello" />
        <input type="hidden" name="_next" value="//connorbaer.io/success.html" />
        <input type="text" name="_gotcha" style="display:none" />
        <button type="submit">Submit and be happy!</button>
    </form>
</div>