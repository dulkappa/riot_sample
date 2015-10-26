todo
  form(onSubmit="{ add }")
    input(name="input" onkeyup="{ edit }")
    button(disabled="{ !text }") Add

  ul
    li(each="{   items }")
      label(class="{ completed: done }")
        input(type="checkbox" checked="{ done }" onClick="{ parent.toggle }")
        | { title }

  script.
    this.disabled = true;

    this.items = opts.items;

    edit(e) {
      this.text = e.target.value;
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text });
        this.text = this.input.value = '';
      }
    }
    
    toggle(e) {
      var item = e.item;
      item.done = !item.done;
      return true;
    }
