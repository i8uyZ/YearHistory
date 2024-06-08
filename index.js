var year = document.getElementById("InputValue").value
var submit = document.getElementById("submit").innerHTML
var ninety = "In this year the attack on the twin tower took place"
var answer = document.getElementById("answer")


document.getElementById("submit").onclick = function() {
    var year = document.getElementById("InputValue").value;
    var answer = document.getElementById("answer");

    if (year === "1800") {
        answer.textContent = "Major Historical Event: The United States capital moves to Washington, D.C";
        answer2.textContent = "Famous Personality Born: Millard Fillmore - American politician and lawyer";
    } else if (year === "1801") {
        answer.textContent = "Major Historical Event: Union of Great Britain and Ireland to form the United Kingdom";
        answer2.textContent = "Famous Personality Born: William Seward - American politician and lawyer";
    } else if (year === "1802") {
        answer.textContent = "Major Historical Event: Treaty of Amiens temporarily ends hostilities between France and the United Kingdom";
        answer2.textContent = "Famous Personality Born: Charles Wheatstone - English scientist and inventor";
    } else if (year === "1803") {
        answer.textContent = "Major Historical Event: The United States purchases the Louisiana Territory from France (Louisiana Purchase)";
        answer2.textContent = "Famous Personality Born: Ralph Waldo Emerson - American essayist, lecturer, and poet";
    } else if (year === "1804") {
        answer.textContent = "Major Historical Event: Napoleon Bonaparte crowns himself Emperor of France";
        answer2.textContent = "Famous Personality Born: Nathaniel Hawthorne - American novelist";
    } else if (year === "1805") {
        answer.textContent = "Major Historical Event: Battle of Trafalgar; British naval victory over France and Spain";
        answer2.textContent = "Famous Personality Born: Hans Christian Andersen - Danish author";
    } else if (year === "1806") {
        answer.textContent = "Major Historical Event: Holy Roman Empire dissolves";
        answer2.textContent = "Famous Personality Born: John Stuart Mill - English philosopher, political economist, and civil servant";
    } else if (year === "1807") {
        answer.textContent = "Major Historical Event: Britain abolishes the transatlantic slave trade";
        answer2.textContent = "Famous Personality Born: Louis Agassiz - Swiss-American biologist and geologist";
    } else if (year === "1808") {
        answer.textContent = "Major Historical Event: Peninsular War begins between France and the allied powers of Spain, Britain, and Portugal";
        answer2.textContent = "Famous Personality Born: Andrew Johnson - 17th President of the United States";
    } else if (year === "1809") {
        answer.textContent = "Major Historical Event: Abraham Lincoln is born";
        answer2.textContent = "Famous Personality Born: Edgar Allan Poe - American writer, poet, editor, and literary critic";
    } else if (year === "1810") {
        answer.textContent = "Major Historical Event: Mexican War of Independence begins";
        answer2.textContent = "Famous Personality Born: P. T. Barnum - American showman and businessman";
    } else if (year === "1811") {
        answer.textContent = "Major Historical Event: Luddites begin to riot in England";
        answer2.textContent = "Famous Personality Born: Horace Greeley - American newspaper editor and publisher";
    } else if (year === "1812") {
        answer.textContent = "Major Historical Event: Napoleon invades Russia; the United States declares war on Britain (War of 1812)";
        answer2.textContent = "Famous Personality Born: Charles Dickens - English writer and social critic";
    } else if (year === "1813") {
        answer.textContent = "Major Historical Event: Battle of Leipzig results in a decisive defeat for Napoleon";
        answer2.textContent = "Famous Personality Born: Richard Wagner - German composer, theater director, and conductor";
    } else if (year === "1814") {
        answer.textContent = "Major Historical Event: Treaty of Paris ends the Napoleonic Wars";
        answer2.textContent = "Famous Personality Born: Joseph Hooker - American Civil War general";
    } else if (year === "1815") {
        answer.textContent = "Major Historical Event: Napoleon defeated at the Battle of Waterloo";
        answer2.textContent = "Famous Personality Born: Ada Lovelace - English mathematician and writer";
    } else if (year === "1816") {
        answer.textContent = "Major Historical Event: The 'Year Without a Summer' due to volcanic eruption";
        answer2.textContent = "Famous Personality Born: Charlotte Brontë - English novelist and poet";
    } else if (year === "1817") {
        answer.textContent = "Major Historical Event: Mississippi becomes the 20th U.S. state";
        answer2.textContent = "Famous Personality Born: Henry David Thoreau - American essayist, poet, and philosopher";
    } else if (year === "1818") {
        answer.textContent = "Major Historical Event: Treaty of 1818 establishes the U.S.-Canada border at the 49th parallel";
        answer2.textContent = "Famous Personality Born: Karl Marx - German philosopher, economist, and political theorist";
    } else if (year === "1819") {
        answer.textContent = "Major Historical Event: Spain cedes Florida to the United States";
        answer2.textContent = "Famous Personality Born: Queen Victoria - Queen of the United Kingdom";
    } else if (year === "1820") {
        answer.textContent = "Major Historical Event: Missouri Compromise is signed into law in the United States";
        answer2.textContent = "Famous Personality Born: Susan B. Anthony - American social reformer and women's rights activist";
    } else if (year === "1821") {
        answer.textContent = "Major Historical Event: Greece declares independence from the Ottoman Empire";
        answer2.textContent = "Famous Personality Born: Louis Vuitton - French fashion designer and businessman";
    } else if (year === "1822") {
        answer.textContent = "Major Historical Event: Brazil declares independence from Portugal";
        answer2.textContent = "Famous Personality Born: Gregor Mendel - Austrian scientist and Augustinian friar";
    } else if (year === "1823") {
        answer.textContent = "Major Historical Event: Monroe Doctrine is proclaimed by U.S. President James Monroe";
        answer2.textContent = "Famous Personality Born: Alfred Russel Wallace - British naturalist, explorer, and biologist";
    } else if (year === "1824") {
        answer.textContent = "Major Historical Event: First Anglo-Burmese War begins";
        answer2.textContent = "Famous Personality Born: Stonewall Jackson - American Confederate general";
    } else if (year === "1825") {
        answer.textContent = "Major Historical Event: Erie Canal opens in New York";
        answer2.textContent = "Famous Personality Born: Thomas Henry Huxley - English biologist and anthropologist";
    } else if (year === "1826") {
        answer.textContent = "Major Historical Event: The last surviving signers of the Declaration of Independence, John Adams and Thomas Jefferson, die on July 4";
        answer2.textContent = "Famous Personality Born: Stephen Foster - American songwriter";
    } else if (year === "1827") {
        answer.textContent = "Major Historical Event: Battle of Navarino secures Greek independence";
        answer2.textContent = "Famous Personality Born: Ludwig van Beethoven - German composer and pianist";
    } else if (year === "1828") {
        answer.textContent = "Major Historical Event: Andrew Jackson elected President of the United States";
        answer2.textContent = "Famous Personality Born: Jules Verne - French novelist";
    } else if (year === "1829") {
        answer.textContent = "Major Historical Event: The Catholic Emancipation Act is passed in the UK";
        answer2.textContent = "Famous Personality Born: Anton Rubinstein - Russian composer and pianist";
    } else if (year === "1830") {
        answer.textContent = "Major Historical Event: July Revolution in France leads to the overthrow of King Charles X";
        answer2.textContent = "Famous Personality Born: Emily Dickinson - American poet";
    } else if (year === "1831") {
        answer.textContent = "Major Historical Event: Nat Turner's slave rebellion occurs in Virginia";
        answer2.textContent = "Famous Personality Born: James Clerk Maxwell - Scottish physicist";
    } else if (year === "1832") {
        answer.textContent = "Major Historical Event: The Great Reform Act is passed in the UK";
        answer2.textContent = "Famous Personality Born: Lewis Carroll - English writer and mathematician";
    } else if (year === "1833") {
        answer.textContent = "Major Historical Event: Slavery abolished in the British Empire";
        answer2.textContent = "Famous Personality Born: Edward Burnett Tylor - English anthropologist";
    } else if (year === "1834") {
        answer.textContent = "Major Historical Event: Spanish Inquisition officially ends";
        answer2.textContent = "Famous Personality Born: James Abbott McNeill Whistler - American artist";
    } else if (year === "1835") {
        answer.textContent = "Major Historical Event: Texas Revolution begins";
        answer2.textContent = "Famous Personality Born: Mark Twain - American writer";
    } else if (year === "1836") {
        answer.textContent = "Major Historical Event: Battle of the Alamo";
        answer2.textContent = "Famous Personality Born: Winslow Homer - American painter";
    } if (year === "1837") {
        answer.textContent = "Major Historical Event: Queen Victoria ascends to the British throne";
        answer2.textContent = "Famous Personality Born: Dwight L. Moody - American evangelist";
    } else if (year === "1838") {
        answer.textContent = "Major Historical Event: Trail of Tears begins, forcibly relocating Native Americans";
        answer2.textContent = "Famous Personality Born: John Wilkes Booth - American actor and assassin";
    } else if (year === "1839") {
        answer.textContent = "Major Historical Event: First Opium War begins";
        answer2.textContent = "Famous Personality Born: John D. Rockefeller - American industrialist and philanthropist";
    } else if (year === "1840") {
        answer.textContent = "Major Historical Event: Penny Black, the world's first adhesive postage stamp, is issued in the UK";
        answer2.textContent = "Famous Personality Born: Thomas Nast - German-American caricaturist and editorial cartoonist";
    } else if (year === "1841") {
        answer.textContent = "Major Historical Event: The United Kingdom formally annexes Hong Kong";
        answer2.textContent = "Famous Personality Born: Claude Monet - French painter";
    } else if (year === "1842") {
        answer.textContent = "Major Historical Event: Treaty of Nanking ends the First Opium War";
        answer2.textContent = "Famous Personality Born: Ambrose Bierce - American writer";
    } else if (year === "1843") {
        answer.textContent = "Major Historical Event: Charles Dickens publishes 'A Christmas Carol'";
        answer2.textContent = "Famous Personality Born: Henry James - American author";
    } else if (year === "1844") {
        answer.textContent = "Major Historical Event: The Great Disappointment among followers of William Miller, who had predicted the Second Coming";
        answer2.textContent = "Famous Personality Born: Pablo de Sarasate - Spanish violinist and composer";
    } else if (year === "1845") {
        answer.textContent = "Major Historical Event: The United States annexes Texas as a state";
        answer2.textContent = "Famous Personality Born: Robert Koch - German physician and microbiologist";
    } else if (year === "1846") {
        answer.textContent = "Major Historical Event: The United States declares war on Mexico (Mexican-American War)";
        answer2.textContent = "Famous Personality Born: Buffalo Bill - American soldier and showman";
    } else if (year === "1847") {
        answer.textContent = "Major Historical Event: Liberia declares independence";
        answer2.textContent = "Famous Personality Born: Thomas Edison - American inventor and businessman";
    } else if (year === "1848") {
        answer.textContent = "Major Historical Event: Revolutions of 1848 occur across Europe";
        answer2.textContent = "Famous Personality Born: Wyatt Earp - American lawman";
    } else if (year === "1849") {
        answer.textContent = "Major Historical Event: California Gold Rush begins";
        answer2.textContent = "Famous Personality Born: Sarah Orne Jewett - American novelist and short story writer";
    } else if (year === "1850") {
        answer.textContent = "Major Historical Event: The Compromise of 1850 is passed in the United States";
        answer2.textContent = "Famous Personality Born: Robert Louis Stevenson - Scottish novelist and travel writer";
    } else if (year === "1851") {
        answer.textContent = "Major Historical Event: The Great Exhibition is held in the Crystal Palace in London";
        answer2.textContent = "Famous Personality Born: Doc Holliday - American gambler and gunfighter";
    } else if (year === "1852") {
        answer.textContent = "Major Historical Event: Harriet Beecher Stowe publishes 'Uncle Tom's Cabin'";
        answer2.textContent = "Famous Personality Born: Calamity Jane - American frontierswoman and professional scout";
    } else if (year === "1853") {
        answer.textContent = "Major Historical Event: Crimean War begins";
        answer2.textContent = "Famous Personality Born: Vincent van Gogh - Dutch painter";
    } else if (year === "1854") {
        answer.textContent = "Major Historical Event: The Republican Party is founded in the United States";
        answer2.textContent = "Famous Personality Born: Oscar Wilde - Irish poet and playwright";
    } else if (year === "1855") {
        answer.textContent = "Major Historical Event: Walt Whitman publishes 'Leaves of Grass'";
        answer2.textContent = "Famous Personality Born: King C. Gillette - American businessman and inventor";
    } else if (year === "1856") {
        answer.textContent = "Major Historical Event: Bleeding Kansas, a series of violent political confrontations, begins";
        answer2.textContent = "Famous Personality Born: Nikola Tesla - Serbian-American inventor and electrical engineer";
    } else if (year === "1857") {
        answer.textContent = "Major Historical Event: Indian Rebellion of 1857";
        answer2.textContent = "Famous Personality Born: Joseph Conrad - Polish-British writer";
    } else if (year === "1858") {
        answer.textContent = "Major Historical Event: The Atlantic cable is completed, enabling telegraphic communication between North America and Europe";
        answer2.textContent = "Famous Personality Born: Theodore Roosevelt - 26th President of the United States";
    } else if (year === "1859") {
        answer.textContent = "Major Historical Event: Charles Darwin publishes 'On the Origin of Species'";
        answer2.textContent = "Famous Personality Born: Henri Bergson - French philosopher";
    } else if (year === "1860") {
        answer.textContent = "Major Historical Event: Abraham Lincoln elected President of the United States";
        answer2.textContent = "Famous Personality Born: Gustav Mahler - Austrian composer and conductor";
    } else if (year === "1861") {
        answer.textContent = "Major Historical Event: American Civil War begins";
        answer2.textContent = "Famous Personality Born: Rabindranath Tagore - Indian poet and philosopher";
    } else if (year === "1862") {
        answer.textContent = "Major Historical Event: Emancipation Proclamation issued by U.S. President Abraham Lincoln";
        answer2.textContent = "Famous Personality Born: Claude Debussy - French composer";
    } else if (year === "1863") {
        answer.textContent = "Major Historical Event: Battle of Gettysburg, a turning point in the American Civil War";
        answer2.textContent = "Famous Personality Born: Henry Royce - English engineer and car manufacturer";
    } else if (year === "1864") {
        answer.textContent = "Major Historical Event: International Red Cross founded";
        answer2.textContent = "Famous Personality Born: Richard Strauss - German composer";
    } else if (year === "1865") {
        answer.textContent = "Major Historical Event: Abraham Lincoln assassinated";
        answer2.textContent = "Famous Personality Born: Jean Sibelius - Finnish composer";
    } else if (year === "1866") {
        answer.textContent = "Major Historical Event: Austro-Prussian War";
        answer2.textContent = "Famous Personality Born: H. G. Wells - English writer";
    } else if (year === "1867") {
        answer.textContent = "Major Historical Event: Alaska is purchased by the United States from Russia";
        answer2.textContent = "Famous Personality Born: Marie Curie - Polish-French physicist and chemist";
    } else if (year === "1868") {
        answer.textContent = "Major Historical Event: Fourteenth Amendment to the United States Constitution is ratified";
        answer2.textContent = "Famous Personality Born: W. E. B. Du Bois - American sociologist, historian, and civil rights activist";
    } else if (year === "1869") {
        answer.textContent = "Major Historical Event: Completion of the First Transcontinental Railroad in the United States";
        answer2.textContent = "Famous Personality Born: Mahatma Gandhi - Indian nationalist leader";
    } else if (year === "1870") {
        answer.textContent = "Major Historical Event: Franco-Prussian War";
        answer2.textContent = "Famous Personality Born: Vladimir Lenin - Russian revolutionary and politician";
    } else if (year === "1871") {
        answer.textContent = "Major Historical Event: Great Chicago Fire";
        answer2.textContent = "Famous Personality Born: Marcel Proust - French novelist";
    } else if (year === "1872") {
        answer.textContent = "Major Historical Event: Yellowstone National Park established";
        answer2.textContent = "Famous Personality Born: Roald Amundsen - Norwegian explorer";
    } else if (year === "1873") {
        answer.textContent = "Major Historical Event: Panic of 1873 triggers a global economic depression";
        answer2.textContent = "Famous Personality Born: Enrico Caruso - Italian operatic tenor";
    } else if (year === "1874") {
        answer.textContent = "Major Historical Event: Gold standard adopted by major economies";
        answer2.textContent = "Famous Personality Born: Winston Churchill - British statesman and Prime Minister";
    } else if (year === "1875") {
        answer.textContent = "Major Historical Event: Civil Rights Act of 1875 is enacted in the United States";
        answer2.textContent = "Famous Personality Born: Maurice Ravel - French composer";
    } else if (year === "1876") {
        answer.textContent = "Major Historical Event: Alexander Graham Bell patents the telephone";
        answer2.textContent = "Famous Personality Born: Konrad Adenauer - German statesman";
    } else if (year === "1877") {
        answer.textContent = "Major Historical Event: The phonograph is invented by Thomas Edison";
        answer2.textContent = "Famous Personality Born: Hermann Hesse - German-Swiss author";
    } else if (year === "1878") {
        answer.textContent = "Major Historical Event: Congress of Berlin redraws the map of the Balkans";
        answer2.textContent = "Famous Personality Born: Upton Sinclair - American writer";
    } else if (year === "1879") {
        answer.textContent = "Major Historical Event: Anglo-Zulu War begins";
        answer2.textContent = "Famous Personality Born: Albert Einstein - German-born physicist";
    } else if (year === "1880") {
        answer.textContent = "Major Historical Event: First Boer War begins in South Africa";
        answer2.textContent = "Famous Personality Born: Douglas MacArthur - American general";
    } else if (year === "1881") {
        answer.textContent = "Major Historical Event: Assassination of U.S. President James A. Garfield";
        answer2.textContent = "Famous Personality Born: Alexander Fleming - Scottish biologist";
    } else if (year === "1882") {
        answer.textContent = "Major Historical Event: Triple Alliance formed between Germany, Austria-Hungary, and Italy";
        answer2.textContent = "Famous Personality Born: Virginia Woolf - English writer";
    } else if (year === "1883") {
        answer.textContent = "Major Historical Event: Eruption of Krakatoa causes global climate effects";
        answer2.textContent = "Famous Personality Born: Benito Mussolini - Italian dictator";
    } else if (year === "1884") {
        answer.textContent = "Major Historical Event: Berlin Conference begins, regulating European colonization and trade in Africa";
        answer2.textContent = "Famous Personality Born: Eleanor Roosevelt - American First Lady and diplomat";
    } else if (year === "1885") {
        answer.textContent = "Major Historical Event: Benz Patent-Motorwagen, the first practical automobile, is built";
        answer2.textContent = "Famous Personality Born: Niels Bohr - Danish physicist";
    } else if (year === "1886") {
        answer.textContent = "Major Historical Event: Haymarket affair, a labor protest in Chicago, turns deadly";
        answer2.textContent = "Famous Personality Born: Diego Rivera - Mexican painter";
    } else if (year === "1887") {
        answer.textContent = "Major Historical Event: Eiffel Tower construction begins in Paris";
        answer2.textContent = "Famous Personality Born: Le Corbusier - Swiss-French architect";
    } else if (year === "1888") {
        answer.textContent = "Major Historical Event: Jack the Ripper murders occur in London";
        answer2.textContent = "Famous Personality Born: T. S. Eliot - American-British poet";
    } else if (year === "1889") {
        answer.textContent = "Major Historical Event: Eiffel Tower completed for the Exposition Universelle";
        answer2.textContent = "Famous Personality Born: Charlie Chaplin - English actor and filmmaker";
    } else if (year === "1890") {
        answer.textContent = "Major Historical Event: Wounded Knee Massacre";
        answer2.textContent = "Famous Personality Born: Dwight D. Eisenhower - 34th President of the United States";
    } else if (year === "1891") {
        answer.textContent = "Major Historical Event: Basketball is invented by James Naismith";
        answer2.textContent = "Famous Personality Born: Max Ernst - German painter";
    } else if (year === "1892") {
        answer.textContent = "Major Historical Event: Ellis Island opens as a U.S. immigration station";
        answer2.textContent = "Famous Personality Born: J. R. R. Tolkien - English writer";
    } else if (year === "1893") {
        answer.textContent = "Major Historical Event: New Zealand becomes the first country to grant women the right to vote";
        answer2.textContent = "Famous Personality Born: Mao Zedong - Chinese revolutionary";
    } else if (year === "1894") {
        answer.textContent = "Major Historical Event: First Sino-Japanese War begins";
        answer2.textContent = "Famous Personality Born: Nikita Khrushchev - Soviet leader";
    } else if (year === "1895") {
        answer.textContent = "Major Historical Event: Wilhelm Röntgen discovers X-rays";
        answer2.textContent = "Famous Personality Born: Babe Ruth - American baseball player";
    } else if (year === "1896") {
        answer.textContent = "Major Historical Event: First modern Olympic Games held in Athens";
        answer2.textContent = "Famous Personality Born: F. Scott Fitzgerald - American writer";
    } else if (year === "1897") {
        answer.textContent = "Major Historical Event: First successful transmission of wireless signals by Guglielmo Marconi";
        answer2.textContent = "Famous Personality Born: Amelia Earhart - American aviator";
    } else if (year === "1898") {
        answer.textContent = "Major Historical Event: Spanish-American War";
        answer2.textContent = "Famous Personality Born: George Gershwin - American composer";
    } else if (year === "1899") {
        answer.textContent = "Major Historical Event: Second Boer War begins";
        answer2.textContent = "Famous Personality Born: Humphrey Bogart - American actor";
    } else if (year === "1900") {
        answer.textContent = "Major Historical Event: Boxer Rebellion in China";
        answer2.textContent = "Famous Personality Born: Aaron Copland - American composer";
    } else if (year === "1901") {
        answer.textContent = "Major Historical Event: McKinley assassinated; Theodore Roosevelt becomes President";
        answer2.textContent = "Famous Personality Born: Walt Disney - American entrepreneur and animator";
    } else if (year === "1902") {
        answer.textContent = "Major Historical Event: Second Boer War ends";
        answer2.textContent = "Famous Personality Born: Ansel Adams - American photographer";
    } else if (year === "1903") {
        answer.textContent = "Major Historical Event: Wright brothers make first powered flight";
        answer2.textContent = "Famous Personality Born: George Orwell - English novelist and essayist";
    } else if (year === "1904") {
        answer.textContent = "Major Historical Event: Russo-Japanese War begins";
        answer2.textContent = "Famous Personality Born: Dr. Seuss - American author and illustrator";
    } else if (year === "1905") {
        answer.textContent = "Major Historical Event: Russian Revolution of 1905";
        answer2.textContent = "Famous Personality Born: Christian Dior - French fashion designer";
    } else if (year === "1906") {
        answer.textContent = "Major Historical Event: San Francisco earthquake";
        answer2.textContent = "Famous Personality Born: Grace Hopper - American computer scientist and naval officer";
    } else if (year === "1907") {
        answer.textContent = "Major Historical Event: Hague Convention on war is held";
        answer2.textContent = "Famous Personality Born: Frida Kahlo - Mexican painter";
    } else if (year === "1908") {
        answer.textContent = "Major Historical Event: Ford Model T introduced";
        answer2.textContent = "Famous Personality Born: Lyndon B. Johnson - 36th President of the United States";
    } else if (year === "1909") {
        answer.textContent = "Major Historical Event: Robert Peary reaches the North Pole";
        answer2.textContent = "Famous Personality Born: Benny Goodman - American jazz clarinetist and bandleader";
    } else if (year === "1910") {
        answer.textContent = "Major Historical Event: Union of South Africa is formed.";
        answer2.textContent = "Famous Personality Born: Mother Teresa - Albanian-Indian Roman Catholic nun and missionary";
    } else if (year === "1911") {
        answer.textContent = "Major Historical Event: Titanic sinks";
        answer2.textContent = "Famous Personality Born: Ronald Reagan - 40th President of the United States";
    } else if (year === "1912") {
        answer.textContent = "Major Historical Event: Balkan Wars";
        answer2.textContent = "Famous Personality Born: Eva Perón - Argentine political leader and actress";
    } else if (year === "1913") {
        answer.textContent = "Major Historical Event: Federal Reserve System established in the United States";
        answer2.textContent = "Famous Personality Born: Gerald Ford - 38th President of the United States";
    } else if (year === "1914") {
        answer.textContent = "Major Historical Event: World War I begins";
        answer2.textContent = "Famous Personality Born: Jonas Salk - American medical researcher and virologist";
    } else if (year === "1915") {
        answer.textContent = "Major Historical Event: Gallipoli Campaign";
        answer2.textContent = "Famous Personality Born: Orson Welles - American actor, director, and writer";
    } else if (year === "1916") {
        answer.textContent = "Major Historical Event: Battle of the Somme";
        answer2.textContent = "Famous Personality Born: Roald Dahl - British novelist, short-story writer, and screenwriter";
    } else if (year === "1917") {
        answer.textContent = "Major Historical Event: Russian Revolution";
        answer2.textContent = "Famous Personality Born: John F. Kennedy - 35th President of the United States";
    } else if (year === "1918") {
        answer.textContent = "Major Historical Event: World War I ends";
        answer2.textContent = "Famous Personality Born: Nelson Mandela - South African anti-apartheid revolutionary and politician";
    } else if (year === "1919") {
        answer.textContent = "Major Historical Event: Treaty of Versailles";
        answer2.textContent = "Famous Personality Born: Pete Seeger - American folk musician and activist";
    } else if (year === "1920") {
        answer.textContent = "Major Historical Event: Prohibition begins in the United States";
        answer2.textContent = "Famous Personality Born: Isaac Asimov - Russian-born American writer and biochemist";
    } else if (year === "1921") {
        answer.textContent = "Major Historical Event: Irish War of Independence";
        answer2.textContent = "Famous Personality Born: Prince Philip, Duke of Edinburgh - Member of the British royal family";
    } else if (year === "1922") {
        answer.textContent = "Major Historical Event: Egypt gains independence from Britain";
        answer2.textContent = "Famous Personality Born: Judy Garland - American actress, singer, and vaudevillian";
    } else if (year === "1923") {
        answer.textContent = "Major Historical Event: Adolf Hitler's failed Beer Hall Putsch";
        answer2.textContent = "Famous Personality Born: Charlton Heston - American actor and political activist";
    } else if (year === "1924") {
        answer.textContent = "Major Historical Event: First Winter Olympics held";
        answer2.textContent = "Famous Personality Born: Jimmy Carter - 39th President of the United States";
    } else if (year === "1925") {
        answer.textContent = "Major Historical Event: Scopes Monkey Trial";
        answer2.textContent = "Famous Personality Born: Malcolm X - American Muslim minister and human rights activist";
    } else if (year === "1926") {
        answer.textContent = "Major Historical Event: Great Miami Hurricane";
        answer2.textContent = "Famous Personality Born: Hugh Hefner - American magazine publisher";
    } else if (year === "1927") {
        answer.textContent = "Major Historical Event: Charles Lindbergh makes first solo transatlantic flight";
        answer2.textContent = "Famous Personality Born: Sidney Poitier - Bahamian-American actor";
    } else if (year === "1928") {
        answer.textContent = "Major Historical Event: Discovery of penicillin";
        answer2.textContent = "Famous Personality Born: Maya Angelou - American poet, memoirist, and civil rights activist";
    } else if (year === "1929") {
        answer.textContent = "Major Historical Event: Wall Street Crash";
        answer2.textContent = "Famous Personality Born: Audrey Hepburn - British actress and humanitarian";
    } else if (year === "1930") {
        answer.textContent = "Major Historical Event: Mahatma Gandhi leads Salt March";
        answer2.textContent = "Famous Personality Born: Neil Armstrong - American astronaut";
    } else if (year === "1931") {
        answer.textContent = "Major Historical Event: Empire State Building completed";
        answer2.textContent = "Famous Personality Born: Rupert Murdoch - Australian-born American media mogul";
    } else if (year === "1932") {
        answer.textContent = "Major Historical Event: Franklin D. Roosevelt elected President of the United States";
        answer2.textContent = "Famous Personality Born: Johnny Cash - American singer-songwriter";
    } else if (year === "1933") {
        answer.textContent = "Major Historical Event: Prohibition ends in the United States";
        answer2.textContent = "Famous Personality Born: Yoko Ono - Japanese multimedia artist, singer, and peace activist";
    } else if (year === "1934") {
        answer.textContent = "Major Historical Event: Dust Bowl begins in the United States";
        answer2.textContent = "Famous Personality Born: Jane Goodall - British primatologist and anthropologist";
    } else if (year === "1935") {
        answer.textContent = "Major Historical Event: Social Security Act passed in the United States";
        answer2.textContent = "Famous Personality Born: Elvis Presley - American singer and actor";
    } else if (year === "1936") {
        answer.textContent = "Major Historical Event: Berlin Olympics";
        answer2.textContent = "Famous Personality Born: John McCain - American politician and military officer";
    } else if (year === "1937") {
        answer.textContent = "Major Historical Event: Hindenburg disaster";
        answer2.textContent = "Famous Personality Born: Colin Powell - American statesman and military leader";
    } else if (year === "1938") {
        answer.textContent = "Major Historical Event: Munich Agreement";
        answer2.textContent = "Famous Personality Born: Jon Voight - American actor";
    } else if (year === "1939") {
        answer.textContent = "Major Historical Event: World War II begins";
        answer2.textContent = "Famous Personality Born: Francis Ford Coppola - American film director, producer, and screenwriter";
    } else if (year === "1940") {
        answer.textContent = "Major Historical Event: Battle of Britain";
        answer2.textContent = "Famous Personality Born: John Lennon - English musician and songwriter";
    } else if (year === "1941") {
        answer.textContent = "Major Historical Event: Attack on Pearl Harbor";
        answer2.textContent = "Famous Personality Born: Bob Dylan - American singer-songwriter";
    } else if (year === "1942") {
        answer.textContent = "Major Historical Event: Battle of Stalingrad";
        answer2.textContent = "Famous Personality Born: Muhammad Ali - American boxer and activist";
    } else if (year === "1943") {
        answer.textContent = "Major Historical Event: Warsaw Ghetto Uprising";
        answer2.textContent = "Famous Personality Born: Mick Jagger - English musician and actor";
    } else if (year === "1944") {
        answer.textContent = "Major Historical Event: D-Day";
        answer2.textContent = "Famous Personality Born: Diana Ross - American singer and actress";
    } else if (year === "1945") {
        answer.textContent = "Major Historical Event: End of World War II";
        answer2.textContent = "Famous Personality Born: Bob Marley - Jamaican singer-songwriter";
    } else if (year === "1946") {
        answer.textContent = "Major Historical Event: Nuremberg Trials";
        answer2.textContent = "Famous Personality Born: Donald Trump - 45th President of the United States";
    } else if (year === "1947") {
        answer.textContent = "Major Historical Event: India gains independence";
        answer2.textContent = "Famous Personality Born: Arnold Schwarzenegger - Austrian-American actor and politician";
    } else if (year === "1948") {
        answer.textContent = "Major Historical Event: Berlin Airlift";
        answer2.textContent = "Famous Personality Born: Prince Charles - Heir apparent to the British throne";
    } else if (year === "1949") {
        answer.textContent = "Major Historical Event: NATO established";
        answer2.textContent = "Famous Personality Born: Bruce Springsteen - American musician";
    } else if (year === "1950") {
        answer.textContent = "Major Historical Event: Korean War begins";
        answer2.textContent = "Famous Personality Born: Stevie Wonder - American musician";
    } else if (year === "1951") {
        answer.textContent = "Major Historical Event: First color TV broadcast";
        answer2.textContent = "Famous Personality Born: Robin Williams - American actor and comedian";
    } else if (year === "1952") {
        answer.textContent = "Major Historical Event: Elizabeth II becomes Queen of the United Kingdom";
        answer2.textContent = "Famous Personality Born: Christopher Reeve - American actor";
    } else if (year === "1953") {
        answer.textContent = "Major Historical Event: DNA discovered";
        answer2.textContent = "Famous Personality Born: Jimmy Carter - 39th President of the United States";
    } else if (year === "1954") {
        answer.textContent = "Major Historical Event: Brown v. Board of Education";
        answer2.textContent = "Famous Personality Born: Oprah Winfrey - American talk show host and philanthropist";
    } else if (year === "1955") {
        answer.textContent = "Major Historical Event: Montgomery Bus Boycott";
        answer2.textContent = "Famous Personality Born: Bill Gates - American business magnate and philanthropist";
    } else if (year === "1956") {
        answer.textContent = "Major Historical Event: Suez Crisis";
        answer2.textContent = "Famous Personality Born: Mel Gibson - American-Australian actor and filmmaker";
    } else if (year === "1957") {
        answer.textContent = "Major Historical Event: Sputnik launched";
        answer2.textContent = "Famous Personality Born: Steve Harvey - American comedian and television host";
    } else if (year === "1958") {
        answer.textContent = "Major Historical Event: NASA formed";
        answer2.textContent = "Famous Personality Born: Michael Jackson - American singer and dancer";
    } else if (year === "1959") {
        answer.textContent = "Major Historical Event: Cuban Revolution";
        answer2.textContent = "Famous Personality Born: Magic Johnson - American basketball player";
    } else if (year === "1960") {
        answer.textContent = "Major Historical Event: Civil Rights Act of 1960";
        answer2.textContent = "Famous Personality Born: Sean Penn - American actor and filmmaker";
    } else if (year === "1961") {
        answer.textContent = "Major Historical Event: Bay of Pigs Invasion";
        answer2.textContent = "Famous Personality Born: Barack Obama - 44th President of the United States";
    } else if (year === "1962") {
        answer.textContent = "Major Historical Event: Cuban Missile Crisis";
        answer2.textContent = "Famous Personality Born: Steve Irwin - Australian zookeeper and television personality";
    } else if (year === "1963") {
        answer.textContent = "Major Historical Event: March on Washington";
        answer2.textContent = "Famous Personality Born: Michael Jordan - American basketball player";
    } else if (year === "1964") {
        answer.textContent = "Major Historical Event: Civil Rights Act of 1964";
        answer2.textContent = "Famous Personality Born: Sandra Bullock - American actress";
    } else if (year === "1965") {
        answer.textContent = "Major Historical Event: Voting Rights Act of 1965";
        answer2.textContent = "Famous Personality Born: J.K. Rowling - British author";
    } else if (year === "1966") {
        answer.textContent = "Major Historical Event: Cultural Revolution begins in China";
        answer2.textContent = "Famous Personality Born: Halle Berry - American actress";
    } else if (year === "1967") {
        answer.textContent = "Major Historical Event: Six-Day War";
        answer2.textContent = "Famous Personality Born: Julia Roberts - American actress";
    } else if (year === "1968") {
        answer.textContent = "Major Historical Event: Martin Luther King Jr. assassinated";
        answer2.textContent = "Famous Personality Born: Will Smith - American actor and rapper";
    } else if (year === "1969") {
        answer.textContent = "Major Historical Event: Apollo 11 lands on the Moon";
        answer2.textContent = "Famous Personality Born: Jennifer Aniston - American actress";
    } else if (year === "1970") {
        answer.textContent = "Major Historical Event: Kent State shootings";
        answer2.textContent = "Famous Personality Born: Mariah Carey - American singer-songwriter";
    } else if (year === "1971") {
        answer.textContent = "Major Historical Event: Intel releases the microprocessor "
        answer2.textContent = "Famous Personality Born: Elon Musk - South African-born entrepreneur";
    } else if (year === "1972") {
        answer.textContent = "Major Historical Event: Watergate scandal";
        answer2.textContent = "Famous Personality Born: The Rock (Dwayne Johnson) - American actor and wrestler";
    } else if (year === "1973") {
        answer.textContent = "Major Historical Event: Roe v. Wade";
        answer2.textContent = "Famous Personality Born: Sachin Tendulkar - Indian cricketer";
    } else if (year === "1974") {
        answer.textContent = "Major Historical Event: Nixon resigns";
        answer2.textContent = "Famous Personality Born: Leonardo DiCaprio - American actor and producer";
    } else if (year === "1975") {
        answer.textContent = "Major Historical Event: End of Vietnam War";
        answer2.textContent = "Famous Personality Born: Angelina Jolie - American actress and filmmaker";
    } else if (year === "1976") {
        answer.textContent = "Major Historical Event: United States Bicentennial";
        answer2.textContent = "Famous Personality Born: Benedict Cumberbatch - English actor";
    } else if (year === "1977") {
        answer.textContent = "Major Historical Event: Star Wars released";
        answer2.textContent = "Famous Personality Born: Shakira - Colombian singer and songwriter";
    } else if (year === "1978") {
        answer.textContent = "Major Historical Event: Jonestown massacre";
        answer2.textContent = "Famous Personality Born: Kobe Bryant - American basketball player";
    } else if (year === "1979") {
        answer.textContent = "Major Historical Event: Iranian Revolution";
        answer2.textContent = "Famous Personality Born: Heath Ledger - Australian actor";
    } else if (year === "1980") {
        answer.textContent = "Major Historical Event: Ronald Reagan elected President of the United States";
        answer2.textContent = "Famous Personality Born: Kim Jong-un - Supreme Leader of North Korea";
    } else if (year === "1981") {
        answer.textContent = "Major Historical Event: AIDS epidemic begins";
        answer2.textContent = "Famous Personality Born: Beyoncé - American singer and actress";
    } else if (year === "1982") {
        answer.textContent = "Major Historical Event: Falklands War";
        answer2.textContent = "Famous Personality Born: Prince William, Duke of Cambridge - Member of the British royal family";
    } else if (year === "1983") {
        answer.textContent = "Major Historical Event: U.S. Embassy bombing in Beirut";
        answer2.textContent = "Famous Personality Born: Chris Hemsworth - Australian actor";
    } else if (year === "1984") {
        answer.textContent = "Major Historical Event: Apple Macintosh released";
        answer2.textContent = "Famous Personality Born: Katy Perry - American singer and songwriter";
    } else if (year === "1985") {
        answer.textContent = "Major Historical Event: Live Aid concerts";
        answer2.textContent = "Famous Personality Born: Cristiano Ronaldo - Portuguese footballer";
    } else if (year === "1986") {
        answer.textContent = "Major Historical Event: Chernobyl disaster";
        answer2.textContent = "Famous Personality Born: Lady Gaga - American singer and actress";
    } else if (year === "1987") {
        answer.textContent = "Major Historical Event: Stock market crash";
        answer2.textContent = "Famous Personality Born: Lionel Messi - Argentine footballer";
    } else if (year === "1988") {
        answer.textContent = "Major Historical Event: Pan Am Flight 103 bombing";
        answer2.textContent = "Famous Personality Born: Rihanna - Barbadian singer and actress";
    } else if (year === "1989") {
        answer.textContent = "Major Historical Event: Fall of the Berlin Wall";
        answer2.textContent = "Famous Personality Born: Taylor Swift - American singer-songwriter";
    } else if (year === "1990") {
        answer.textContent = "Major Historical Event: Nelson Mandela released from prison";
        answer2.textContent = "Famous Personality Born: Emma Watson - British actress and activist";
    } else if (year === "1991") {
        answer.textContent = "Major Historical Event: Gulf War begins";
        answer2.textContent = "Famous Personality Born: Ed Sheeran - British singer-songwriter";
    } else if (year === "1992") {
        answer.textContent = "Major Historical Event: European Union formed";
        answer2.textContent = "Famous Personality Born: Miley Cyrus - American singer and actress";
    } else if (year === "1993") {
        answer.textContent = "Major Historical Event: World Wide Web released to the public";
        answer2.textContent = "Famous Personality Born: Ariana Grande - American singer and actress";
    } else if (year === "1994") {
        answer.textContent = "Major Historical Event: Rwandan genocide";
        answer2.textContent = "Famous Personality Born: Justin Bieber - Canadian singer-songwriter";
    } else if (year === "1995") {
        answer.textContent = "Major Historical Event: Oklahoma City bombing";
        answer2.textContent = "Famous Personality Born: Meghan, Duchess of Sussex - Member of the British royal family";
    } else if (year === "1996") {
        answer.textContent = "Major Historical Event: Dolly the sheep cloned";
        answer2.textContent = "Famous Personality Born: Lady Gaga - American singer and actress";
    } else if (year === "1997") {
        answer.textContent = "Major Historical Event: Hong Kong handed over to China";
        answer2.textContent = "Famous Personality Born: Ed Sheeran - British singer-songwriter";
    } else if (year === "1998") {
        answer.textContent = "Major Historical Event: Google founded";
        answer2.textContent = "Famous Personality Born: Emma Watson - British actress and activist";
    } else if (year === "1999") {
        answer.textContent = "Major Historical Event: Euro currency introduced";
        answer2.textContent = "Famous Personality Born: Daniel Radcliffe - British actor";
    } else if (year === "2000") {
        answer.textContent = "Major Historical Event: Y2K scare";
        answer2.textContent = "Famous Personality Born: Emma Watson - British actress and activist";
    } else if (year === "2001") {
        answer.textContent = "Major Historical Event: September 11 attacks";
        answer2.textContent = "Famous Personality Born: Harry Styles - British singer-songwriter";
    } else if (year === "2002") {
        answer.textContent = "Major Historical Event: Euro becomes official currency";
        answer2.textContent = "Famous Personality Born: Millie Bobby Brown - British actress and producer";
    } else if (year === "2003") {
        answer.textContent = "Major Historical Event: Invasion of Iraq";
        answer2.textContent = "Famous Personality Born: Ariana Grande - American singer and actress";
    } else if (year === "2004") {
        answer.textContent = "Major Historical Event: Indian Ocean tsunami";
        answer2.textContent = "Famous Personality Born: Millie Bobby Brown - British actress and producer";
    } else if (year === "2005") {
        answer.textContent = "Major Historical Event: Hurricane Katrina";
        answer2.textContent = "Famous Personality Born: Billie Eilish - American singer-songwriter";
    } else if (year === "2006") {
        answer.textContent = "Major Historical Event: Twitter launched";
        answer2.textContent = "Famous Personality Born: Millie Bobby Brown - British actress and producer";
    } else if (year === "2007") {
        answer.textContent = "Major Historical Event: Financial crisis begins";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2008") {
        answer.textContent = "Major Historical Event: Barack Obama elected President of the United States";
        answer2.textContent = "Famous Personality Born: Luka Sabbat - American actor and model";
    } else if (year === "2009") {
        answer.textContent = "Major Historical Event: Swine flu pandemic";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2010") {
        answer.textContent = "Major Historical Event: Deepwater Horizon oil spill";
        answer2.textContent = "Famous Personality Born: Zendaya - American actress and singer";
    } else if (year === "2011") {
        answer.textContent = "Major Historical Event: Arab Spring";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2012") {
        answer.textContent = "Major Historical Event: Higgs boson discovery";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2013") {
        answer.textContent = "Major Historical Event: Edward Snowden leaks NSA documents";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2014") {
        answer.textContent = "Major Historical Event: Ebola outbreak";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2015") {
        answer.textContent = "Major Historical Event: Paris climate agreement";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2016") {
        answer.textContent = "Major Historical Event: Brexit referendum";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2017") {
        answer.textContent = "Major Historical Event: Solar eclipse";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2018") {
        answer.textContent = "Major Historical Event: Thai cave rescue";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2019") {
        answer.textContent = "Major Historical Event: Notre-Dame de Paris fire";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2020") {
        answer.textContent = "Major Historical Event: COVID-19 pandemic";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2021") {
        answer.textContent = "Major Historical Event: United States Capitol attack";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2022") {
        answer.textContent = "Major Historical Event: Inauguration of Joe Biden as President of the United States";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2023") {
        answer.textContent = "Major Historical Event: Bitcoin reaches all-time high";
        answer2.textContent = "Famous Personality Born: Maisie Williams - British actress";
    } else if (year === "2024") {
        answer.textContent = "Major Historical Event: TBD";
        answer2.textContent = "Famous Personality Born: TBD";
    } else {
        answer.textContent = "Please enter a year between 1800 and 2024.";
        answer2.textContent = "Please enter a year between 1800 and 2024.";
    }
} 
    
    