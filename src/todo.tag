<todo>
  <form onSubmit={ add }>
    <input type="text">
    <input type="submit" value="Add">
  </form>

  <ul>
    <li each={ item, i in list }>
      { item }
    </li>
  </ul>

  <script>
    this.list = [];

    add(e) {
      var input = e.target[0];
      this.list.push(input.value);
      input.value = '';
    }
  </script>

</todo>
