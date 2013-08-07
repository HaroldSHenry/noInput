# noInput

**noInput** is a jQuery plugin for displaying inline labels similar to HTML 5's placeholders, and that lets you style the placeholder text.

## Usage
You may sometimes want to indicate what leaving an `<input>` or `<textarea>` element blank indicates. The HTML 5 *placeholder* attribute does this, but doesn't let you style placeholder text. The jQuery **noInput** plugin places a label that you specify within the element and then hides it when the element gets focus and when it has content. The result looks like the "(don't know)" below:

>![Example 1](./art/pres.png)

### Usage

1. You can find supporting CSS in **jquery-noInput.css** that styles the `label.iLbl` class as an example. You will doubtless want to adjust it for the label class or classes you will use, and incorporate the results into your own CSS file:

        label.iLbl
        {
          position:absolute;
          margin:2px 0 0 8px;
          padding:0;
          line-height:20px;
          font-weight:400;
          font-size:14px;
          color:#888;
        }

 
2. In the `<body>` of your HTML page,  wherever you want an `<input>` or `<textarea>` element with an inline label like "(don't know)", enclose the element and associated label in a `<div>` that has the CSS style `position: relative;`.

3. You can apply a normal label to the input element, but in addition to that, add an **empty** `<label>` element with:
   - `class` equal to a class like `"iLbl"` that you style for the purpose, with the CSS `position:absolute;`.
   - `for` equal to the `id` of the input element in which it will appear
   - `id` equal to the `id` of that input element with the letter 'L' appended to the end
   - `left` in some cases set to a value that places the inline label at the desired horizontal position

     For example:

        <div style="position:relative">
          <label for="Lkn">The last king of Norway:</label>
          <label class="iLbl" for="Lkn" id="LknL"></label>
          <input id="Lkn" name="Lkn" />
        </div>

4. At the end of the HTML body, you can include the **jquery-noInput.min.js** Javascript file:

        <script type="text/javascript" src="./js/jquery-noInput.min.js"></script>

    Of course, since it's a simple script, you'll probably prefer to consolidate it into a **.js** file of your own, instead.

5. Finally, use jQuery to apply `noInput` to every label of class `.iLbl` and pass it the "(don't know)" text that you want to appear when there is no content in the input element:

        <script type="text/javascript">$(".iLbl").noInput( "(don't know)" );</script>

The result is an `<input>` control that looks like this:

>![Example 2](./art/king.png)


## Feedback?

I suspect there may be better ways to accomplish some of what I'm doing here, and I'd much appreciate any help, corrections or suggestions!




