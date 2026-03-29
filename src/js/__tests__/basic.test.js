import sum from '../basic';
import {
	orderByProps,
	destructuring
} from '../app'


test('should sum', () => {
	const result = sum([1, 2, 3]);

	expect(result).toBe(6);
});

test('sort testing', () => {
	const obj = {
		name: 'мечник',
		health: 10,
		level: 2,
		attack: 80,
		defence: 40
	};
	const sort = ["name", "level"];
	const result = orderByProps(obj, sort);
	expect(result).toEqual([{
			key: "name",
			value: "мечник"
		},
		{
			key: "level",
			value: 2
		},
		{
			key: "attack",
			value: 80
		},
		{
			key: "defence",
			value: 40
		},
		{
			key: "health",
			value: 10
		}
	])


})

test('destructur testing', () => {
	const character = {
		name: 'Лучник',
		type: 'Bowman',
		health: 50,
		level: 3,
		attack: 40,
		defence: 10,
		special: [{
				id: 8,
				name: 'Двойной выстрел',
				icon: 'http://...',
				description: 'Двойной выстрел наносит двойной урон'
			},
			{
				id: 9,
				name: 'Нокаутирующий удар',
				icon: 'http://...'
				// <- обратите внимание, описание "засекречено"
			}
		]
	}

	const result = destructuring(character)
	expect(result).toEqual([{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно'
		}
	])

})