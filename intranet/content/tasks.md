---
title: "Tasks"
date: 2024-02-26T15:23:14-04:00
id: "tasks"
---


## Daily Tasks
<div class="checklist pb-5">
    <input type="checkbox" id="holds" name="holds" value="holds">
    <label for="holds"> Look for holds (<a href="https://koha.leblibrary.com/cgi-bin/koha/circ/view_holdsqueue.pl?branchlimit=LEBANON&itemtypeslimit=&ccodeslimit=&locationslimit=&run_report=1" target="_blank">Lebanon holds</a>, <a href="https://koha.leblibrary.com/cgi-bin/koha/circ/view_holdsqueue.pl?branchlimit=KILTON&itemtypeslimit=&ccodeslimit=&locationslimit=&run_report=1" target="_blank">Kilton holds</a>)</label><br>
    <input type="checkbox" id="remove-holds" name="remove-holds" value="remove-holds">
    <label for="remove-holds"> Remove old holds from Contactless Pickup</label><br>
    <input type="checkbox" id="emails" name="emails" value="emails">
    <label for="emails"><a href="https://groups.google.com/a/leblibrary.com/g/reference" target="_blank"> Check reference emails (permanent staff only)</a></label><br>
    <input type="checkbox" id="shelve" name="shelve" value="shelve">
    <label for="shelve"> Shelve books on book carts (includes Children's Room and Teen Room)</label><br>
    <input type="checkbox" id="book-drop" name="book-drop" value="book-drop">
    <label for="book-drop"> Check book drops once per shift</label><br>
    <input type="checkbox" id="free-cart" name="free-cart" value="free-cart">
    <label for="free-cart"> Tidy up the free book cart</label><br>
    <input type="checkbox" id="bulletin" name="bulletin" value="bulletin">
    <label for="bulletin"> Remove outdated and for-profit flyers from bulletin board</label><br>
    <input type="checkbox" id="rounds" name="rounds" value="rounds">
    <label for="rounds"> Check on activity in all common spaces (includes Children's Room and Teen Room)</label><br>
    <input type="checkbox" id="book-sale" name="book-sale" value="book-sale">
    <label for="book-sale"> Tidy up the book sale and put duds on the free cart</label><br>
    <input type="checkbox" id="new" name="new" value="new">
    <label for="new"> Tidy up the New section</label><br>
    <input type="checkbox" id="common" name="common" value="common">
    <label for="common"> Tidy up all common spaces in the building (includes Children's Room and Teen Room)</label><br>
    <input type="checkbox" id="shelf-read" name="shelf-read" value="shelf-read">
    <label for="shelf-read"> Shelf read to ensure that books and DVDs are in correct order (<a href="https://docs.google.com/spreadsheets/d/1Z7Uufyw4oJW0HuOdTS7taIVBtSALZvvPMT1J9CqmUNU/edit#gid=1156949115" target="_blank">Lebanon Log</a>, <a href="https://docs.google.com/spreadsheets/d/194uih669lUq__orSJ0X4lkuSUMIQm2pYHj2cvJyNEnE/edit#gid=0" target="_blank">Kilton Log</a>)</label><br>
    <input type="checkbox" id="transfers" name="transfers" value="transfers">
    <label for="transfers"> <a href="https://koha.leblibrary.com/cgi-bin/koha/circ/transferstoreceive.pl" target="_blank">Look for overdue transfers</a>. Check in any item that has been on the list for longer than 7 days, and mark it as missing in Koha</label><br>
   <div class="test"><input type="checkbox" id="missing-holds" name="missing-holds" value="missing-holds">
   <label for="missing-holds"> Search for <a href="https://koha.leblibrary.com/cgi-bin/koha/reports/guided_reports.pl?id=326&op=run" target=
    "_blank">missing items with holds</a> at both libraries. If there is only one copy and it's missing, then remove the hold and request an ILL.</label></div>
</div>

<div class="col-lg-6 pb-5">
<h2>Opening Tasks</h2>
<div class="checklist">
<input type="checkbox" id="lights" name="lights" value="lights">
<label for="lights"> Turn on all lights</label><br>
<input type="checkbox" id="monitors" name="monitors" value="monitors">
<label for="monitors"> Turn on patron computer monitors</label><br>
<input type="checkbox" id="paper" name="paper" value="paper">
<label for="paper"> Stock printers with paper</label><br>
<input type="checkbox" id="masks" name="masks" value="masks">
<label for="masks"> Replenish masks at all desks</label><br>
<input type="checkbox" id="sick" name="sick" value="sick">
<label for="sick"> Check the <a href="https://groups.google.com/a/leblibrary.com/g/Reference" target="_blank">reference email</a> to see if anyone has called in sick</label><br>
<input type="checkbox" id="holds" name="holds" value="holds">
<label for="holds"> Search for holds (<a href="https://koha.leblibrary.com/cgi-bin/koha/circ/view_holdsqueue.pl?branchlimit=LEBANON&itemtypeslimit=&ccodeslimit=&locationslimit=&run_report=1" target="_blank">Lebanon holds</a>, <a href="https://koha.leblibrary.com/cgi-bin/koha/circ/view_holdsqueue.pl?branchlimit=KILTON&itemtypeslimit=&ccodeslimit=&locationslimit=&run_report=1" target="_blank">Kilton holds</a>)</label><br>
<input type="checkbox" id="book-drops" name="book-drops" value="book-drops">
<label for="book-drops"> Empty all book drops (includes Children's Room at Lebanon)</label><br>
<input type="checkbox" id="courier" name="courier" value="courier">
<label for="courier"> Check courier bags</label><br>
<input type="checkbox" id="news" name="news" value="news">
<label for="news"> Check that all newpapers have arrived</label><br>
<input type="checkbox" id="events" name="events" value="events">
<label for="events"> Turn on events TV (Kilton only)</label><br>
</div>
</div>

<div class="col-lg-6 pb-5">
<h2>Closing Tasks</h2>
<div class="checklist">
<input type="checkbox" id="warning-10" name="warning-10" value="warning-10">
<label for="warning-10"> Give patrons a 10 minute closing warning</label><br>
<input type="checkbox" id="cash" name="cash" value="cash">
<label for="cash"> Put cash away</label><br>
<input type="checkbox" id="monitors" name="monitors" value="monitors">
<label for="monitors"> Turn off all computer monitors</label><br>
<input type="checkbox" id="warning-5" name="warning-5" value="warning-5">
<label for="warning-5"> Give patrons a 5 minute closing warning</label><br>
<input type="checkbox" id="scanners" name="scanners" value="scanners">
<label for="scanners"> Put all scanners in cradles to charge overnight</label><br>
<input type="checkbox" id="patrons" name="patrons" value="patrons">
<label for="patrons"> Make sure there are no patrons in the building</label><br>
<input type="checkbox" id="lights" name="lights" value="lights">
<label for="lights"> Turn off all lights</label><br>
<input type="checkbox" id="lock" name="lock" value="lock">
<label for="lock"> Lock all doors</label><br>
</div>
</div>