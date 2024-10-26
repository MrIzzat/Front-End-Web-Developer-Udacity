<table>
    <thead>
        <tr>
            <th></th>
            <th><span style="font-weight: 700; font-style: normal;">for loop</span></th>
            <th>for...in loop</th>
            <th><span style="font-weight: bold;">forEach()</span></th>
            <th>for...of loop</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span style="font-weight: bold;">Benefits</span></td>
            <td>- Common<br>- Good for arrays</td>
            <td>- Eliminates the need to keep track of a counter and exit condition</td>
            <td>- Eliminates the need to keep track of a counter and exit condition<br>- Eliminates
                the use of an index</td>
            <td>- Loops over any data that is iterable (as opposed to enumerable)<br>- Eliminates
                use of an index<br>- Can stop or break anytime</td>
        </tr>
        <tr>
            <td><span style="font-weight: bold; font-style: normal;">Drawbacks</span></td>
            <td>- Keeping track of the counter and exit condition<br>- Possible confusion<br>- Not
                as easy to use if data not structured like an array</td>
            <td>- Still uses an index to access the values in an array<br>- Possible confusion<br>-
                Loop over all enumerable properties - including functions</td>
            <td>- Only works with arrays<br>- Unable to break - must return</td>
            <td>- Don't have access to an index, which is sometimes needed</td>
        </tr>
    </tbody>
</table>