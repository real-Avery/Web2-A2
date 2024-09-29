USE crowdfunding_db;

-- INSERT INTO CATEGORY (NAME) VALUES 
-- ('Healthcare'), 
-- ('Education'), 
-- ('Environment');

-- -- Insert records into FUNDRAISER table
-- delete from fundraiser;


-- INSERT INTO FUNDRAISER (ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) 
-- VALUES 
-- ('John Smith', 'Building a new community health center in downtown', 50000.00, 20000.00, 'New York', TRUE, 4),
-- ('Mary Johnson', 'Scholarships for underprivileged students in rural areas', 30000.00, 12000.00, 'Los Angeles', TRUE, 5),
-- ('David Brown', 'Clean River Initiative: Removing trash and debris', 25000.00, 15000.00, 'Chicago', TRUE, 6),
-- ('Emily Davis', 'Providing medical supplies to local clinics', 40000.00, 30000.00, 'Houston', TRUE, 4),
-- ('Michael Wilson', 'Planting trees to combat urban pollution', 15000.00, 8000.00, 'Seattle', FALSE, 6),
-- ('Sarah Miller', 'Educational resources for low-income families', 20000.00, 5000.00, 'Miami', TRUE, 5),
-- ('James Taylor', 'Support for children’s hospitals during the pandemic', 70000.00, 50000.00, 'Atlanta', TRUE, 4),
-- ('Jessica Anderson', 'Environmental awareness programs in schools', 18000.00, 9000.00, 'Phoenix', TRUE, 4);

delete from category where CATEGORY_ID=3

