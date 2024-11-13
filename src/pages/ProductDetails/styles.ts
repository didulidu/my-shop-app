import styled from 'styled-components';

export const Container = styled.main`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
`;

export const ProductName = styled.h1`
	font-size: 2em;
	margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
	font-size: 1.5em;
	color: #ff6600;
	margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
	font-size: 1em;
	line-height: 1.6;
	margin-bottom: 20px;
`;

export const Section = styled.section`
	margin-top: 30px;
`;

export const FeaturesList = styled.ul`
	list-style-type: disc;
	padding-left: 20px;
`;

export const FeatureItem = styled.li`
	margin-bottom: 10px;
`;

export const SpecificationsTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 20px;

	td {
		border: 1px solid #ddd;
		padding: 8px;
	}
`;

export const SpecKey = styled.td`
	font-weight: bold;
	width: 30%;
`;

export const SpecValue = styled.td`
	width: 70%;
`;

export const AdditionalInfo = styled.div`
	margin-bottom: 20px;
`;

export const InfoKey = styled.h3`
	font-size: 1.2em;
	margin-bottom: 5px;
`;

export const InfoValue = styled.p`
	font-size: 1em;
	margin-bottom: 10px;
`;
