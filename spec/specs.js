describe('count_up_by', function(){
  it("it counts up to a predetermined number", function(){
    expect(count_up_by("25")).to.equal("25");
  });

  it("it counts up to the number by a multiple entered by a user", function(){
    expect(count_up_by([5, 25])).to.equal([5,10,15,20,25]);
  });

});
