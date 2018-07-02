var data;
data = '<div name="data">';
data += '<div class="form-row">';
data += '  <div class="form-group col-md-12">';
data += '    <select name="capacity" id="capacity" class="form-control">';
data += '      <option value="0.200" selected>200 ml</option>';
data += '      <option value="0.250">250 ml</option>';
data += '      <option value="0.269">269 ml</option>';
data += '      <option value="0.330">330 ml</option>';
data += '      <option value="0.350">350 ml</option>';
data += '      <option value="0.355">355 ml</option>';
data += '      <option value="0.440">440 ml</option>';
data += '      <option value="0.473">473 ml</option>';
data += '      <option value="0.500">500 ml</option>';
data += '      <option value="0.550">550 ml</option>';
data += '      <option value="0.568">568 ml</option>';
data += '      <option value="0.600">600 ml</option>';
data += '      <option value="0.710">710 ml</option>';
data += '      <option value="1000">1000 ml</option>';
data += '    </select>';
data += '  </div>';
data += '</div>';
data += '<div class="form-row">';
data += '  <div class="form-group col-md-6">';
data += '    <div class="input-group">';
data += '      <div class="input-group-prepend">';
data += '        <div class="input-group-text">Price $</div>';
data += '      </div>';
data += '      <input type="number" name="price" id="price" placeholder="0.00" class="form-control">';
data += '    </div>';
data += '  </div>';
data += '  <div class="form-group col-md-6">';
data += '    <div class="input-group">';
data += '      <div class="input-group-prepend">';
data += '        <div class="input-group-text">Price / liter $</div>';
data += '      </div>';
data += '      <input type="number" name="price_liter" id="price_liter" class="form-control price" disabled>';
data += '    </div>';
data += '  </div>';
data += '</div>';
data += '</div>';
data += '<hr>'

$("#add_data").click(function(){
    $("#data").append(data);
});

$("#calculate").click(function(){
    $("div[name=data]").each(function(){
        var capacity = $("select[name=capacity]", this).val();
        var price = $("input[name=price]", this).val();
        var capacity_total = capacity * 4;
        var price_total = price * 4;
        var price_liter = price_total / capacity_total
        console.log("Capacity: " + capacity);
        console.log("Price: " + price);
        console.log("Capacity total: " + capacity_total);
        console.log("Price total: " + price_total);
        console.log("Price per liter: " + price_liter);
        $("input[name=price_liter]", this).val(price_liter.toFixed(2));
    });
});